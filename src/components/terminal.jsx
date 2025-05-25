import Home from "./home";
import Project from "./project";
import Riwayat from "./Riwayat";
import Kisah from "./kisah";
import Contact from "./contact";

export const Terminal = ({
  currentView,
  typedCommand,
  isTyping,
  onFakeCommand,
  terminalOutput,
  keySoundPool,
}) => {
  let poolIndex = 0;

  const playTypeSound = () => {
    if (!keySoundPool?.current?.length) return;

    const sound = keySoundPool.current[poolIndex];
    sound.currentTime = 0;
    sound.play().catch(() => {});
    poolIndex = (poolIndex + 1) % keySoundPool.current.length;
  };

  const viewComponents = {
    home: <Home />,
    project: <Project />,
    riwayat: <Riwayat />,
    kisah: <Kisah />,
    contact: <Contact />,
  };

  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-md border border-green-400 mt-4">
      <p className="mb-2">
        root@portfolio:~$ {isTyping ? `cd ${typedCommand}` : `cd ${currentView}`}
      </p>

      {!isTyping && (
        <div className="pl-4 space-y-1 break-words">
          {/* Output dari terminal palsu */}
          {terminalOutput.map((line, idx) => (
            <p key={idx} className="whitespace-pre-line">{line}</p>
          ))}

          {/* Komponen konten halaman aktif */}
          {viewComponents[currentView]}

          {/* Input terminal palsu */}
          <div className="flex flex-col mt-4">
            <label htmlFor="terminal-input" className="mb-1">
              root@portfolio:~$ <span className="opacity-70">_</span>
            </label>
            <input
              id="terminal-input"
              type="text"
              className="bg-black text-green-400 font-mono outline-none w-full border-none focus:ring-0"
              placeholder="Ketik perintah (cd project, help, ls)"
              onKeyDown={(e) => {
                if (e.key.length === 1) {
                  playTypeSound();
                }
                if (e.key === "Enter") {
                  const command = e.target.value.trim().toLowerCase();
                  e.target.value = "";
                  onFakeCommand(command);
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};