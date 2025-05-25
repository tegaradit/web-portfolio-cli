const Project = () => {
  return (
    <div className="space-y-2">
      <p>// 🧠 Portofolio Project</p>

      <div>
        <p><strong>1. SportScore (2024-2025)</strong></p>
        <p>➡ Sistem manajemen turnamen futsal realtime (Vue + Express + WebSocket)</p>
        <p>➡ Dukungan babak grup, klasemen otomatis, final four, adu penalti, socket timer</p>
      </div>

      <div>
        <p><strong>2. Midtrans Payment Integration</strong></p>
        <p>➡ Sistem pembayaran digital untuk event</p>
        <p>➡ Validasi transaksi, biaya admin, status pending/success dengan callback Midtrans</p>
      </div>

      <div>
        <p><strong>3. RT/RW Net Dashboard</strong></p>
        <p>➡ Sistem internal ISP desa untuk pantau bandwidth, redaman fiber, ping user, dan monitoring revenue</p>
      </div>

      <div>
        <p><strong>4. Layanan Website UMKM</strong></p>
        <p>➡ Custom landing page untuk toko lokal, sekolah, organisasi</p>
        <p>➡ Stack: Laravel/Vue, shared hosting + domain bundling</p>
      </div>
    </div>
  );
};

export default Project;
