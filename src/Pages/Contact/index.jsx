import HeaderContent from '../../components/shared/Header';
import FooterContent from '../../components/shared/Footer';

export default function Contact() {
    return (
        <>
            <HeaderContent />

            <div className="container my-5 py-5">
                <h2 className="text-center mb-4">Hubungi Kami</h2>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-sm p-4">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan nama Anda"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Alamat Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="nama@email.com"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Pesan
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Tulis pesan Anda di sini..."
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary w-100"
                                >
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <FooterContent />
        </>
    );
}