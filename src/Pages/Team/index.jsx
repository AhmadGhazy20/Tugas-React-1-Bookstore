import HeaderContent from '../../components/shared/Header';
import FooterContent from '../../components/shared/Footer';

export default function Team() {
    return (
        <>
            <HeaderContent />

            <div className="container my-5 py-5">
                <h2 className="text-center mb-5">Tim Kami</h2>

                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <img
                            src="https://picsum.photos/150?random=4"
                            className="rounded-circle mb-3 shadow"
                            alt="Team 1"
                        />
                        <h4>Ahmad Ghazy</h4>
                        <p className="text-muted">Frontend Developer</p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <img
                            src="https://picsum.photos/150?random=5"
                            className="rounded-circle mb-3 shadow"
                            alt="Team 2"
                        />
                        <h4>Siti Aminah</h4>
                        <p className="text-muted">UI/UX Designer</p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <img
                            src="https://picsum.photos/150?random=6"
                            className="rounded-circle mb-3 shadow"
                            alt="Team 3"
                        />
                        <h4>Budi Santoso</h4>
                        <p className="text-muted">Project Manager</p>
                    </div>
                </div>
            </div>

            <FooterContent />
        </>
    );
}