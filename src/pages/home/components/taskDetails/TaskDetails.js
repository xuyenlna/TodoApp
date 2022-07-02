import React from "react";
import "./TaskDetails.scss";
import { DatePicker, Input, Space } from "antd";

export default function TaskDetails() {
  //handle function for deadline
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  return (
    <div
      className="modal fade"
      id="infoModal"
      tabIndex={-1}
      aria-labelledby="infoModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-info">
        <div className="modal-content">
          <div className="modal-header">
            <div className="task-title">
              <i className="fa fa-bookmark" />
              <span>TASK-217871</span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="task-click"
            >
              <div>
                <i className="fab fa-telegram-plane" />
                <span style={{ paddingRight: 20 }}>Give feedback</span>
              </div>
              <div>
                <i className="fa fa-link" />
                <span style={{ paddingRight: 20 }}>Copy link</span>
              </div>
              <i
                className="fa fa-trash-alt"
                style={{ cursor: "pointer", margin: "auto" }}
              />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>

          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-8">
                  <p className="issue">This is an issue of type: Task.</p>
                  <div className="description">
                    <p>Description</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse expedita quis vero tempora error sed reprehenderit
                      sequi laborum, repellendus quod laudantium tenetur nobis
                      modi reiciendis sint architecto.
                    </p>
                  </div>

                  <div className="comment">
                    <h6>Comment</h6>
                    <div className="block-comment" style={{ display: "flex" }}>
                      <div className="avatar">
                        <img src="./assets/img/download (1).jfif" alt />
                      </div>
                      <div className="input-comment">
                        <Input type="text" placeholder="Add a comment ..." />
                        {/* <input type="text" placeholder="Add a comment ..." /> */}
                      </div>
                    </div>

                    <div className="lastest-comment">
                      <div className="comment-item">
                        <div
                          className="display-comment"
                          style={{ display: "flex" }}
                        >
                          <div className="avatar">
                            <img src="./assets/img/download (1).jfif" alt />
                          </div>
                          <div>
                            <p style={{ marginBottom: 5 }}>
                              Lord Gaben <span>a month ago</span>
                            </p>
                            <p style={{ marginBottom: 5 }}>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Repellendus tempora ex
                              voluptatum saepe ab officiis alias totam ad
                              accusamus molestiae?
                            </p>
                            <div>
                              <span style={{ color: "#929398" }}>Edit</span>•
                              <span style={{ color: "#929398" }}>Delete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4 filter">
                  <div className="status">
                    <h6>STATUS</h6>
                    <select>
                      <option value={1}>Todo</option>
                      <option value={2}>Doing</option>
                      <option value={3}>Done</option>
                    </select>
                  </div>

                  <div className="priority" style={{ marginBottom: 20 }}>
                    <h6>PRIORITY</h6>
                    <select>
                      <option>Highest</option>
                      <option>Medium</option>
                      <option>Low</option>
                      <option>Lowest</option>
                    </select>
                  </div>

                  <div className="deadline">
                    <h6>DEADLINE</h6>
                    <Space direction="vertical" size={12}>
                      <DatePicker showTime onChange={onChange} onOk={onOk} />
                    </Space>
                  </div>

                  <div className="estimate">
                    <h6>ORIGINAL ESTIMATE (HOURS)</h6>
                    <input type="text" className="estimate-hours" />
                  </div>

                  <div className="time-tracking">
                    <h6>TIME TRACKING</h6>
                    <div style={{ display: "flex" }}>
                      <i className="fa fa-clock" />
                      <div style={{ width: "100%" }}>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p className="logged">4h logged</p>
                          <p className="estimate-time">12h estimated</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ color: "#929398" }}>Create at a month ago</div>
                  <div style={{ color: "#929398" }}>
                    Update at a few seconds ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
