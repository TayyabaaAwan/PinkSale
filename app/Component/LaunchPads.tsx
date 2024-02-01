import "bootstrap/dist/css/bootstrap.min.css";
import pinkswap from "../app/img/pinkswap.png";
export default function LaunchPads() {
  const cardBlocks = [
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
  ];

  return (
    <div className="col-md-12 pt-4 d-flex flex-wrap">
      {cardBlocks?.map((item, index) => {
        return (
          <>
            <div className="col-md-4 p-2">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mt-4">
                    <div className="flex-fill mr-1">{item.title}</div>
                    <div className="flex-fill ml-1">{item.value}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
