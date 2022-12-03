import "./BoardContent.scss";
import { MoreIcon, PlusIcon, TemplateIcon } from "../../assets/icon";
import sort from "../../util/sort";

// import sample data
import { sampleData } from "../../services/sampleData";

function BoardContent() {
    const columns = sort.order(sampleData.boards[0].columns, sampleData.boards[0].columnOrder, 'id')

    return (
        <>
            {columns.map((col, i) => {
                return (
                    <div key={i} className="list-wrapper">
                        <div className="list-content">
                            <div className="list-header">
                                <p className="header-name">{col.title}</p>
                                <div className="header-extras">
                                    <MoreIcon className="more-icon" />
                                </div>
                            </div>
                            <div className="list-cards">
                                {sort.order(col.cards, col.cardOrder, 'id').map((card, i) => {
                                    return (
                                        <a key={i} href="/" className="card">
                                            {card.background && (
                                                <img
                                                    className="card-bg"
                                                    src={card.background}
                                                    alt=""
                                                />
                                            )}
                                            <p className="card-title">
                                                {card.title}
                                            </p>
                                        </a>
                                    );
                                })}
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
        </>
    );
}

export default BoardContent;
