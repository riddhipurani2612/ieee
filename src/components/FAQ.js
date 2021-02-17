import { React } from "react";
import { Modal, Button } from "react-bootstrap";

const FAQ = (props) => {
    console.log("FAQ");
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Frequently Asked Questions
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center display-3 my-3 text">FAQs</div>
                <ul>
                    <div className="text-left display-5 my-2 mx-2 text">
                        <li>Why should I become a IEEE GRSS memeber?</li>
                    </div>
                    <div className="text-left display-6 my-2 mx-2 text">
                        The GRS society is one of 38 societies that belong to
                        the world’s largest professional society, and that is
                        the IEEE. The vision of the GRS society is to be the
                        leading society in the science, engineering, application
                        and education of remote sensing.
                    </div>
                    <div className="text-left display-5 my-2 mx-2 text">
                        <li>Which resources can I have access to ?</li>
                    </div>
                    <div className="text-left display-6 my-2 mx-2 text">
                        You can have online access to our three premier
                        journals: the IEEE Transactions on Geoscience and Remote
                        Sensing (TGRS), IEEE Journal of Selected Topics in
                        Applied Earth Observations and Remote Sensing (J-STARS)
                        and the IEEE Geoscience and Remote Sensing Letters
                        (GRSL). Our Society’s archival publications represent
                        the forefront of remote sensing science, technology and
                        applications. The Transactions are among the premier
                        journals in IEEE as well as remote sensing journals in
                        terms of citation index and impact factor. Members can
                        access the latest issues either on-line or via hard
                        copies in the mail.
                    </div>
                    <div className="text-left display-5 my-2 mx-2 text">
                        <li>What are the technical commitees of IEEE GRSS?</li>
                    </div>
                    <div className="text-left display-6 my-2 mx-2 text">
                        You can participate in our five Technical Committees:
                        Earth Science Informatics (ESI), Image Analysis and Data
                        Fusion (IADF), Frequency Allocations in Remote Sensing
                        (FARS), Instrumentation and Future Technologies (IFT),
                        and International Spaceborne Imaging Spectroscopy
                        (ISIS). The technical committees work together to review
                        the state of art of technology in these research areas.
                        The Technical Committees make important impacts on the
                        future directions of remote sensing technologies. As a
                        GRSS member, you can take a leadership role in this
                        process.
                    </div>
                    <div className="text-left display-5 my-2 mx-2 text">
                        <li>What are the additional benefits?</li>
                    </div>
                    <div className="text-left display-6 my-2 mx-2 text">
                        You can attend IGARSS, our premier conference, at a
                        reduced rate and also participate in the planning of
                        IGARSS. You can utilize the resources provided by the
                        Society, such as our quarterly Magazine, education
                        programs, industrial relations and newsletter, on-line
                        lectures and current state-of-the-art information of the
                        IEEE GRSS (www.grss-ieee.org). The Society puts forth a
                        lot of effort in remote sensing education initiatives,
                        development and collection of educational resources for
                        K-12, college/ graduate education as well as continuing
                        education for professionals. Members can access these
                        resources. We are strengthening our industry relations
                        program. As a member, you can connect to our industrial
                        partners via this initiative.Other benefits of IEEE GRSS
                        members include subscription to IEEE Spectrum magazine,
                        access to IEEE Xplore data base, IEEE e-mail alias,
                        network with others in the local member community
                        (chapters), career and employment resources, etc.
                    </div>
                    <div className="text-left display-5 my-2 mx-2 text">
                        <li>How do I become a member ?</li>
                    </div>
                    <div className="text-left display-6 my-2 mx-2 text">
                        Follow{" "}
                        <a
                            href="https://www.ieee.org/communities/societies/"
                            target="blank"
                            title="IEEE - Learn about IEEE Society Membership"
                        >
                            this link{" "}
                        </a>
                        to the IEEE Geoscience and Remote Sensing Society
                        Membership page to renew your membership or add GRSS
                        membership to your existing IEEE membership. Students
                        and affiliate members can use the same link.
                    </div>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.closeModal}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default FAQ;
