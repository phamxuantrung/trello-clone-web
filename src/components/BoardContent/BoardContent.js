import "./BoardContent.scss"
import { MoreIcon, PlusIcon, TemplateIcon } from "../../assets/icon";

function BoardContent() {
    return (
        <div>
            {[1, 1, 1, 1, 1, 1].map((e, i) => {
                return (
                    <div key={i} className="list-wrapper">
                        <div className="list-content">
                            <div className="list-header">
                                <p className="header-name">To do</p>
                                <div className="header-extras">
                                    <MoreIcon className="more-icon" />
                                </div>
                            </div>
                            <div className="list-cards">
                                <a href="/" className="card">
                                    <img
                                        className="card-bg"
                                        src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/960x640/0544300f63565ddba9b2e994afd25040/photo-1669025466409-450f22c7561a.jpg"
                                        alt="imgae"
                                    />
                                    <p className="card-title">Tiếng anh</p>
                                </a>
                                <a href="/" className="card">
                                    <p className="card-title">Toán rời rạc</p>
                                </a>
                            </div>
                            <div className="list-add-card">
                                <a href="/" className="add-card-composer">
                                    {" "}
                                    <PlusIcon className="icon" /> Thêm thẻ
                                </a>
                                <a href="/" className="add-card-template">
                                    <TemplateIcon className="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default BoardContent;
