import { Editor } from "@tinymce/tinymce-react";
import { DatePicker, Input, Space } from "antd";
import React from "react";
import "./AddNewTask.scss";

export default function AddNewTask() {
  //handle function for deadline
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  // handle function for editor desc
  const handleEditorChange = (content, editor) => {
    console.log(content);
  };

  return (
    <div
      className="modal fade"
      id="addTaskModal"
      tabIndex={-1}
      aria-labelledby="addTaskModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-addNewTask">
        <div className="modal-content">
          <div className="modal-header">
            <div className="task-title">Add New Task</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="title">
                <label>Task Title</label>
                <Input />
              </div>

              <div className="desc">
                <label>Description</label>
                <Editor
                  onEditorChange={handleEditorChange}
                  // onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                {/* <button onClick={log}>Log editor content</button> */}
              </div>

              <div className="priority">
                <label style={{ display: "block" }}>Priority</label>
                <select>
                  <option>Highest</option>
                  <option>Medium</option>
                  <option>Low</option>
                  <option>Lowest</option>
                </select>
              </div>

              <div className="deadline">
                <label style={{ display: "block" }}>Deadline</label>
                <Space direction="vertical" size={12}>
                  <DatePicker showTime onChange={onChange} onOk={onOk} />
                </Space>
              </div>
              <div className="submitBtn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
