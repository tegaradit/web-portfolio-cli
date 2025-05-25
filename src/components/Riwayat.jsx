import { useState } from "react";
import eduPhoto from "../assets/osis.webp";
import awardPhoto from "../assets/kab.webp";
import pklPhoto from "../assets/pkl.jpg";
import rtPhoto from "../assets/person.webp";

const items = [
    {
        section: "// 🎓 Pendidikan",
        photo: eduPhoto,
        data: [
            { text: "SMK RPL – Sekolah Menengah Kejuruan, fokus Backend dan Jaringan" },
            { text: "Aktif di OSIS Sekbid 4 (Bina Mental & Akhlak)" }
        ]
    },
    {
        section: "// 🏆 Prestasi",
        photo: awardPhoto,
        data: [
            { text: "Juara 1 LKS Cyber Security tingkat Kabupaten" },
            { text: "Kontribusi dalam projek digitalisasi kegiatan sekolah" }
        ]
    },
    {
        section: "// 💼 Pengalaman PKL",
        photo: pklPhoto,
        data: [
            { text: "PKL di perusahaan pengembangan website, menangani backend dan database" },
            { text: "Mengembangkan fitur register user, payment, dan upload dokumen" }
        ]
    },
    {
        section: "// 🌐 Pengelola RT/RW Net",
        photo: rtPhoto,
        data: [
            { text: "Mengelola 400+ user fiber-to-the-home (FTTH)" },
            { text: "Monitor redaman optik, ping, gateway mikrotik, dan laporan bulanan" }
        ]
    }
];

const Riwayat = () => {
    const [modalImg, setModalImg] = useState(null);

    return (
        <div className="space-y-6">
            {items.map((section, idx) => (
                <div key={idx}>
                    <img
                        src={section.photo}
                        alt=""
                        className="mx-auto mb-2 rounded-lg object-cover border cursor-pointer"
                        style={{ width: 120, height: 160, aspectRatio: "3/4" }}
                        loading="lazy"
                        onClick={() => setModalImg(section.photo)}
                    />
                    <p>{section.section}</p>
                    <ul className="list-disc ml-4">
                        {section.data.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {modalImg && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setModalImg(null)}
                >
                    <div className="relative" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute -top-3 -right-3 bg-white rounded-full shadow p-1 hover:bg-gray-200"
                            onClick={() => setModalImg(null)}
                            aria-label="Tutup"
                        >
                            &#10005;
                        </button>
                        <img
                            src={modalImg}
                            alt=""
                            className="rounded-lg max-h-[80vh] max-w-[90vw] shadow-lg"
                        />
                    </div>
                </div>
            )}

        </div>
    );
};

export default Riwayat;
