import { useState } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { initFirebaseApp } from "firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { useStore } from "store";

const storage = getStorage(initFirebaseApp());

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

export default function UploadImage(props) {
  const { parent, updateParent, student, updateStudent } = useStore(
    (state) => state
  );
  const { step } = props;
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(step === "parent" ? parent.img : student.img);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
    }
  };

  const uploadImage = async (props) => {
    const { file } = props;
    const imgRef = ref(storage, `images/${file.name}`);
    const uploadTask = await uploadBytes(imgRef, file);
    const imageUrl = await getDownloadURL(uploadTask.ref);
    if (imageUrl) {
      setLoading(false);
      setUrl(imageUrl);
      if (step === "student") {
        updateStudent({ img: imageUrl });
      } else if (step === "parent") {
        updateParent({ img: imageUrl });
      }
    }
  };

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      customRequest={uploadImage}
      onChange={(e) => handleChange(e)}
    >
      {url ? (
        <img src={url} alt="avatar" style={{ width: "100%" }} />
      ) : (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <p style={{ marginTop: 8, textTransform: "capitalize" }}>
            Upload {step}'s <br /> Profile Picture
          </p>
        </div>
      )}
    </Upload>
  );
}
