import { useState } from 'react'
import './App.css'

// 1. Komponen Album (Home)
function AlbumContent() {
  return (
    <main>
      <div className="album py-5 bg-light mt-5">
        <div className="container">
          <h2 className="text-center mb-5">Rekomendasi Buku</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://picsum.photos/400/250?random=1" className="card-img-top" alt="Buku 1" />
                <div className="card-body">
                  <p className="card-text">Buku ini berisi ringkasan menarik untuk mengelola keuangan.</p>
                  <button type="button" className="btn btn-sm btn-outline-primary">Lihat Detail</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://picsum.photos/400/250?random=2" className="card-img-top" alt="Buku 2" />
                <div className="card-body">
                  <p className="card-text">Novel fiksi ilmiah yang akan membawa Anda menjelajahi galaksi.</p>
                  <button type="button" className="btn btn-sm btn-outline-primary">Lihat Detail</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://picsum.photos/400/250?random=3" className="card-img-top" alt="Buku 3" />
                <div className="card-body">
                  <p className="card-text">Kumpulan resep masakan nusantara yang mudah dibuat oleh pemula.</p>
                  <button type="button" className="btn btn-sm btn-outline-primary">Lihat Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// 2. Komponen Team Baru
function TeamContent() {
  return (
    <div className="container my-5 py-5">
      <h2 className="text-center mb-5">Tim Kami</h2>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <img src="https://picsum.photos/150?random=4" className="rounded-circle mb-3 shadow" alt="Team 1" />
          <h4>Ahmad Ghazy</h4>
          <p className="text-muted">Frontend Developer</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src="https://picsum.photos/150?random=5" className="rounded-circle mb-3 shadow" alt="Team 2" />
          <h4>Siti Aminah</h4>
          <p className="text-muted">UI/UX Designer</p>
        </div>
        <div className="col-md-4 mb-4">
          <img src="https://picsum.photos/150?random=6" className="rounded-circle mb-3 shadow" alt="Team 3" />
          <h4>Budi Santoso</h4>
          <p className="text-muted">Project Manager</p>
        </div>
      </div>
    </div>
  );
}

// 3. Komponen Contact Baru
function ContactContent() {
  return (
    <div className="container my-5 py-5">
      <h2 className="text-center mb-4">Hubungi Kami</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-3">
                <label className="form-label">Alamat Email</label>
                <input type="email" className="form-control" placeholder="nama@email.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda di sini..."></textarea>
              </div>
              <button type="button" className="btn btn-primary w-100">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Komponen Footer
function FooterContent() {
  return (
    <div className="container mt-auto">
      <footer className="py-3 my-4 border-top">
        <p className="text-center text-body-secondary">&copy; 2026 Bookstore React, Inc</p>
      </footer>
    </div>
  );
}

// 5. Komponen Utama (App)
function App() {
  // State untuk mengatur halaman mana yang sedang aktif
  const [halamanAktif, setHalamanAktif] = useState('home');

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        {/* Header dengan fungsi onClick untuk ganti halaman */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="#" onClick={() => setHalamanAktif('home')} className="d-inline-flex align-items-center text-decoration-none">
              <i className="fa-solid fa-book" style={{ color: "rgb(116, 192, 252)" }}></i>
              <span className="ms-2 fs-4 text-dark fw-bold">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" onClick={() => setHalamanAktif('home')} className={`nav-link px-2 ${halamanAktif === 'home' ? 'text-primary fw-bold' : 'text-dark'}`}>Home</a></li>
            <li><a href="#" onClick={() => setHalamanAktif('team')} className={`nav-link px-2 ${halamanAktif === 'team' ? 'text-primary fw-bold' : 'text-dark'}`}>Team</a></li>
            <li><a href="#" onClick={() => setHalamanAktif('contact')} className={`nav-link px-2 ${halamanAktif === 'contact' ? 'text-primary fw-bold' : 'text-dark'}`}>Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* --- KONTEN HALAMAN BERUBAH SESUAI MENU YANG DIKLIK --- */}
        {halamanAktif === 'home' && (
          <>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg my-5">
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Perubahan Kecil Untuk Perubahan Besar</h1>
                <p className="lead mt-3">Banyak cara untuk menjadi kepribadian lebih baik, contohnya dengan melakukan hal baik walaupun kecil.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-4">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="https://picsum.photos/720/600" alt="Hero" width="600" />
              </div>
            </div>
            <AlbumContent />
          </>
        )}

        {halamanAktif === 'team' && <TeamContent />}
        {halamanAktif === 'contact' && <ContactContent />}
      </div>

      <FooterContent />
    </div>
  )
}

export default App