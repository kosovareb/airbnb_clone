"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      if (result.info?.secure_url) {
        onChange(result.info.secure_url);
      }
      console.log(result.info.secure_url, "url");
    },
    [onChange]
  );

  console.log("value", value);

  //   return (
  //     <CldUploadWidget
  //       onSuccess={(result) => handleUpload(result)}
  //       uploadPreset="hhr6kp8d"
  //       options={{
  //         maxFiles: 1,
  //       }}
  //     >
  //       {({ open }: { open?: () => void }) => (
  //         //Just for safety we use the open with ? because it has the change to not been created before we call it0
  //         <div
  //           onClick={() => open?.()}
  //           className="relative cursor-pointer hover:opacity-70 transition border-dashed
  //                 border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-400"
  //         >
  //           <TbPhotoPlus size={50} />
  //           <div className="font-semibold text-lg">Click to upload</div>
  //           {value && (
  //             <div className="absolute inset-0 w-full h-full">
  //               <Image
  //                 src={value}
  //                 alt="Upload"
  //                 fill
  //                 style={{ objectFit: "cover" }}
  //               />
  //             </div>
  //           )}
  //         </div>
  //       )}
  //     </CldUploadWidget>
  //   );
  return (
    <CldUploadWidget
      onSuccess={(result) => handleUpload(result)}
      uploadPreset="hhr6kp8d"
      options={{ maxFiles: 1 }}
    >
      {({ open }: { open?: () => void }) => (
        <div
          onClick={() => open?.()}
          className="relative cursor-pointer hover:opacity-70 transition border-dashed
                border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-400"
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>
          {value && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={value}
                alt="Upload"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
