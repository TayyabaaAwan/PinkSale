import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from 'react-bootstrap';

export default function LaunchPads() {
  const cardBlocks = [
    {
      pic:"baby shamu.png",
      button: "Upcoming",
      title: "BABY SHAMU",
      value: "Fair Launch ",
      launchType: "Soft",
      coinCap: "1 BNB",
      progress: "(0.00%)",
      progressNumber: "60",
      liquidity: "100%",
      lockTime: "365 days",
      startAmount: "0 BNB",
      endAmount: "1 BNB"
    },
    {
      pic:"Tangyuan.png",
      button: "Upcoming",
      title: "Tangyuan",
      value: "1 USDT = 3,100 Tangyuan ",
      launchType: "Soft/Hard",
      coinCap: "5,000 USDT - 20,000 USDT",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "100 days",
      startAmount: "0 USDT",
      endAmount: "20,000 USDT"

    },
    {
      pic:"bsc.png",
      button: "Upcoming",
      title: "Crypto Funded Projects",
      value: "1 USDC = 1.1 CFP",
      launchType: "Soft/Hard",
      coinCap: "100,000 USDC - 400,000 USDC",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "31 days",
      startAmount: "0 USDC",
      endAmount: "400,000 USDC"
    },
    {
      pic:"skillon.png",
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB"
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
                  <div className=" justify-content-between mt-4">
                  <div className="d-flex"  style={{ justifyContent: "space-between", width: "100%" }}>
                  <img src={`/images/${item.pic}`} alt={item.title} style={{ display: "flex", alignItems: "left", height: "60px", width: "60px"}}/>
                  <button type="button" className="btn rounded-pill  mx-1"
                   style={{ height: "25px", padding: "0 10px", backgroundColor: "#fdfaea", color: "#D29813",  justifyItems: "space-between" , fontSize: "12px"}}
                > <i className="bi bi-circle-fill" style={{ fontSize: "8px", marginRight: "5px"  }}></i>
                  {item.button}
                </button></div>
                    <div className="flex-fill mr-1" style={{ fontWeight: 'bold' ,fontSize: "22px"  }}>{item.title}</div>
                    <div className="flex-fill mr-1"style={{ fontWeight: '600' ,fontSize: "15px" , color: "#888"}}>{item.value}</div>
                    <div className="flex-fill mr-1" style={{ fontWeight: '600' ,fontSize: "15px" , color: "#222"}}>{item.launchType}</div>
                    <div className="flex-fill mr-1" style={{ fontWeight: '600' ,fontSize: "20px" , color: "#f95997"}}>{item.coinCap}</div>
                    <div className="d-flex" >
                    <h6 style={{ fontWeight: '600' ,fontSize: "15px" , color: "#222"}}>Progress </h6>
                    <div className="flex-fill mr-1" style={{marginLeft: "10px", fontWeight: '600' ,fontSize: "15px" , color: "#222"}}>{item.progress}</div></div>
        
                    <div className="d-block " >
                    <div className="progressBar" style={{
                      height: "10px", width:"100%", backgroundColor: "#f5f5f5", transition: "width 0.5s", borderRadius: "5px",
                    }}> 
                      <span className="progress-label-left" style={{  marginTop: "10px", float: "left", marginRight: "10px", fontWeight: '600' ,fontSize: "13px" , color: "#888"}}>{item.startAmount}</span>
                      <span className="progress-label-right" style={{  marginTop: "10px",float: "right", fontWeight: '600' ,fontSize: "13px" , color: "#888"}}>{item.endAmount}</span>

                    </div></div>

                   
                    <div className="container flex-fill" style={{ marginTop: "30px", width: "100%", borderBottom: '1px solid #ccc'}} >
                    <div className="d-flex "  >
                    <h6>Liquidity %:</h6>
                    <div className="flex-fill mr-1" style={{ paddingInlineStart: "180px", fontWeight: '600' ,fontSize: "14px" , color: "#888"    }}>{item.liquidity}</div></div>
                    <div className="d-flex">
                    <h6>Lock Time:</h6>
                    <div className="flex-fill mr-1" style={{ paddingInlineStart: "170px" ,fontWeight: '600' ,fontSize: "14px" , color: "#888"  }}>{item.lockTime}</div> </div></div>
                   
                    <div className="d-flex " style={{ marginTop: '20px'}}>
                    <div className="d-block " style={{ lineHeight: '0.2'}}>
                    <p>Sale Starts In:</p>
                    <p style={{ fontWeight: 'bold'}}>00:90:00</p></div>
                    <div className="d-flex align-items-right " style={{marginLeft: "50px"}}>
                    <button type="button" className="btn rounded-pill justify-content-between  mx-1"
                   style={{  backgroundColor: "#f3f3f4", color: "grey",  justifyItems: "space-between" , fontSize: "15px"}}
                > <i className="bi bi-bell" style={{ fontSize: "15px", marginRight: "5px"  }}></i></button>
                <button type="button" className="btn rounded-pill  mx-1"
                   style={{ backgroundColor: "#f3f3f4", color: "grey",  justifyItems: "space-between" , fontSize: "15px"}}
                > <i className="bi bi-heart" style={{ fontSize: "15px", marginRight: "5px"  }}></i></button>
                <button type="button" className="btn rounded-pill  mx-1"
                  style={{ backgroundColor: "#fdeaf1", color: "#f95997" }}
                >
                  View
                </button></div></div>
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
