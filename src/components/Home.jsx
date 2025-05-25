import React from "react";
import profilePhoto from "../assets/profile.jpg";

const Home = () => {
    return (
        <div className="space-y-4 flex flex-col items-start sm:flex-row sm:items-center">
            <img
                src={profilePhoto}
                alt="Tegar Adityansyah"
                className="w-24 h-24 rounded-full object-cover mb-2 sm:mb-0 sm:mr-6 border-2 border-blue-100 shadow flex-shrink-0"
                style={{ aspectRatio: "2 / 3" }}
            />
            <div className="space-y-2">
                <p>
                    // Halo 👋, saya <strong>Tegar Adityansyah</strong>
                </p>
                <p>
                    // Cyber Security Engineer & Backend Developer
                </p>
                <p>
                    // Umur 17 tahun • Berdomisili di Krakal, Kebumen, Jawa Tengah
                </p>
                <p>
                    // Berpengalaman dalam mengamankan sistem, melakukan penetration testing, dan membangun aplikasi backend yang scalable
                </p>
                <p>
                    // Aktif mengembangkan solusi keamanan, mengelola infrastruktur server, serta membangun aplikasi event olahraga realtime
                </p>
                <p>
                    // Keahlian:{" "}
                    <span className="italic">
                        Node.js, Express, MySQL, WebSocket, Docker, Linux, Nginx, Midtrans, Vue, Burp Suite, Metasploit
                    </span>
                </p>
                <p>
                    // Saya juga mengelola layanan RT/RW Net dan aktif dalam komunitas IT lokal
                </p>
                <p>
                    // Gunakan perintah{" "}
                    <span className="text-yellow-400">ls</span> atau{" "}
                    <span className="text-yellow-400">cd [menu]</span> untuk menjelajahi terminal ini
                </p>
            </div>
        </div>
    );
};

export default Home;
