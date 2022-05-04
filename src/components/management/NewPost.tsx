import React, { useState, useMemo, useEffect } from "react";
import DatePicker from "react-datepicker";
import dynamic from "next/dynamic";
import SesstionUtil from "../../common/SessionUtil";
import { SessionEnum } from "../../../src/common/SessionEnum";

type formDataVo = {
  title: string;
  content: string;
  postDate: Date;
};

const Quill = dynamic(import("react-quill"), {
  ssr: false,
});

/**
 * 이미지 버튼 클릭
 * 파일 배열에 저장
 * 파일 url을 화면에 이미지로 렌더링
 * 발행 클릭시, file을 s3에 업로드
 * 업로드 후 바로 링크 저장
 * formData에서 교체
 * formData를 DB or FireBase에 저장
 *
 *
 */

const NewPost = () => {
  const [formData, setFormData] = useState<formDataVo>({
    title: "",
    content: "",
    postDate: new Date(),
  });

  const [images, setImages] = useState<Array<File>>();
  const [imageLinks, setImageLinks] = useState<Array<string>>();

  useEffect(() => {
    setFormDataFromSesstionData();
  }, []);

  const onChange = (e: any) => {
    const { value, id } = e.target;

    setFormData({ ...formData, [id]: value });
  };

  const imageHandler = () => {};

  const getSeestion = () => {
    const data = SesstionUtil.getSession(SessionEnum.fomrData);
  };

  const setFormDataFromSesstionData = () => {
    const sessionData = getSeestion();
  };

  const saveFormData = () => {
    const params = { ...formData };
    SesstionUtil.setSession(SessionEnum.fomrData, params);
  };

  const onClickPostButton = () => {
    const params = { ...formData };

    console.log(params);
  };

  const getTimeList = (type: "hour" | "minute") => {
    const maxCount = type === "hour" ? 24 : 60;
    const timeList = new Array();

    for (let i = 0; i < maxCount; i++) {
      timeList.push(i);
    }

    return timeList;
  };

  const getModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean", "imageHandler"],
        ],
      },
    }),
    []
  );

  return (
    <div className="editor-wrap">
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        id="title"
        onChange={onChange}
      />
      <Quill
        theme="snow"
        value={formData.content}
        modules={getModules}
        onChange={(content) => {
          setFormData({ ...formData, content });
        }}
      />
      <div>
        <p>발행일</p>
        <div className="editor-date-wrap">
          <div className="editor-date">
            <DatePicker
              selected={formData.postDate}
              dateFormat={"yyyy년 MM월 dd일"}
              onChange={(date: Date) => {
                setFormData({ ...formData, postDate: date });
              }}
            />
          </div>
          <div className="editor-time">
            <select
              onChange={(e) => {
                const temp = { ...formData };
                temp.postDate.setHours(Number.parseInt(e.target.value));
                setFormData(temp);
              }}
              value={formData.postDate.getHours()}
            >
              {getTimeList("hour")?.map((code) => {
                return (
                  <option key={"hour_" + code} value={code}>
                    {code + "시"}
                  </option>
                );
              })}
            </select>
            <select
              onChange={(e) => {
                const temp = { ...formData };
                temp.postDate.setMinutes(Number.parseInt(e.target.value));
                setFormData(temp);
              }}
              id="postTimeMinute"
              value={formData.postDate.getMinutes()}
            >
              {getTimeList("minute")?.map((code) => {
                return (
                  <option key={"minute" + code} value={code}>
                    {code + "분"}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="button-wrap">
        <button onClick={saveFormData}>임시 저장</button>
        <button onClick={onClickPostButton}>발행</button>
      </div>
    </div>
  );
};

export default NewPost;
