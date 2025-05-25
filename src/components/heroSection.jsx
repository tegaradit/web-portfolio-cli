import { useEffect, useRef, useState } from "react";
import { Terminal } from "../components/terminal";
import { Navbar } from "../components/navbar";

export default function App() {
  const [step, setStep] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [currentView, setCurrentView] = useState("home");
  const [typedCommand, setTypedCommand] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const typingRef = useRef(null);
  const keySoundPool = useRef([]);
  const poolIndex = useRef(0); // untuk cycling audio pool

  useEffect(() => {
    const pool = [];
    for (let i = 0; i < 5; i++) {
      const audio = new Audio("/sound/typingsound.mp3");
      audio.volume = 1;
      pool.push(audio);
    }
    keySoundPool.current = pool;
  }, []);

  const steps = [
    "Booting system...",
    "Establishing secure connection...",
    "Accessing data...",
    "Bypassing firewall...",
    "Decrypting payload...",
    "Access granted ✅"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        const next = prev + 1;
        if (next < steps.length) {
          return next;
        } else {
          setLoadingDone(true);
          clearInterval(interval);
          return prev;
        }
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const playTypeSound = () => {
    if (!keySoundPool.current.length) return;
    const sound = keySoundPool.current[poolIndex.current];
    sound.currentTime = 0;
    sound.play().catch(() => {});
    poolIndex.current = (poolIndex.current + 1) % keySoundPool.current.length;
  };

  const handleNavigate = (menu) => {
    if (!menu || typeof menu !== "string") return;

    const safeMenu = menu.trim().toLowerCase();
    if (typingRef.current) clearInterval(typingRef.current);

    setIsTyping(true);
    setTypedCommand("");
    let index = 0;

    typingRef.current = setInterval(() => {
      if (index < safeMenu.length) {
        const char = safeMenu[index];
        setTypedCommand((prev) => prev + char);
        playTypeSound(); // ✅ panggil di sini
        index++;
      } else {
        clearInterval(typingRef.current);
        setTypedCommand(`cd ${safeMenu}`);
        setTimeout(() => {
          setIsTyping(false);
          setCurrentView(safeMenu);
        }, 800);
      }
    }, 100);
  };

  const handleTerminalCommand = (command) => {
    const cmd = command.trim().toLowerCase();
    if (cmd === "help") {
      setTerminalOutput((prev) => [...prev, "Perintah tersedia: cd [menu], help, ls"]);
    } else if (cmd === "ls") {
      setTerminalOutput((prev) => [...prev, "/home  /project  /riwayat  /kisah  /contact"]);
    } else if (cmd.startsWith("cd ")) {
      const target = cmd.replace("cd ", "");
      if (["home", "project", "riwayat", "kisah", "contact"].includes(target)) {
        handleNavigate(target);
      } else {
        setTerminalOutput((prev) => [...prev, `Folder '${target}' tidak ditemukan`]);
      }
    } else {
      setTerminalOutput((prev) => [...prev, `Perintah '${cmd}' tidak dikenali`]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-4xl mb-4">root@tegar:~$</h1>

        {!loadingDone ? (
          <div className="bg-green-400/20 rounded-sm p-4">
            <p className="text-md md:text-lg animate-pulse">{steps[step]}</p>
            <div className="mt-4 h-2 bg-green-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 transition-all duration-500"
                style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <>
            <Navbar onNavigate={handleNavigate} />
            <Terminal
              currentView={currentView}
              typedCommand={typedCommand}
              isTyping={isTyping}
              onFakeCommand={handleTerminalCommand}
              terminalOutput={terminalOutput}
              keySoundPool={keySoundPool}
            />
          </>
        )}
      </div>
    </div>
  );
}
