import { useState } from "react";
import { storage } from "../config/firebase-config";
import { ref, uploadBytes } from "firebase/storage";

function Storage() {
  const [fileUpload, setFileUpload] = useState(null);

  console.log({ fileUpload });

  const handleUpload = async () => {
    if (!fileUpload) return;

    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    // const filesFolderRef = ref(storage, fileUpload.name);

    await uploadBytes(filesFolderRef, fileUpload);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
}

export default Storage;
