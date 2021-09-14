import React from "react";
import "./Table.css";

function Table(props) {
  const { tabelHead, mainHeadTitle, data, showIndexes = true } = props;
  return (
    <div className="table_container scrollbar-height-0">
      <table className="table">
        <thead className="table_thead">
          <tr className="table_thead_tr">
            {tabelHead.map((item, index) => (
              <th
                className={item === mainHeadTitle ? "table_th_2" : "table_th_1"}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="table_container_tr">
              {showIndexes ? (
                <td className="table_content_item">{index + 1}</td>
              ) : (
                ""
              )}
              <td className="table_content">
                <img className="table_content_img" src={item.img} alt="" />
                <div>
                  <p className="table_content_title">{item.name}</p>
                  {item.subtitle ? (
                    <p className="table_content_subtitle">{item.subtitle}</p>
                  ) : (
                    ""
                  )}
                </div>
              </td>
              {item.details.m ? (
                <td className="table_content_item">{item.details.m}</td>
              ) : (
                ""
              )}
              {item.details.w ? (
                <td className="table_content_item">{item.details.w}</td>
              ) : (
                ""
              )}
              {item.details.l ? (
                <td className="table_content_item">{item.details.l}</td>
              ) : (
                ""
              )}

              {item.details.nr ? (
                <td className="table_content_item">{item.details.nr}</td>
              ) : (
                ""
              )}
              {item.details.d ? (
                <td className="table_content_item">{item.details.d}</td>
              ) : (
                ""
              )}
              {item.details.p ? (
                <td className="table_content_item">{item.details.p}</td>
              ) : (
                ""
              )}
              {item.details.nrr ? (
                <td className="table_content_item">{item.details.nrr}</td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
