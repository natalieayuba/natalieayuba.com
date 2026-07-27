import Image from "next/image";

interface PreviewImageProps {
  projectName: string;
  className?: string;
}

const PreviewImage = ({ projectName, className }: PreviewImageProps) => (
  <div
    className={`relative mx-auto max-w-lg flex-1 ${
      className ? ` ${className}` : ""
    }`}
  >
    <Image
      key={projectName}
      src={`/projects/${projectName.toLowerCase()}/${projectName.toLowerCase()}-thumbnail.png`}
      alt={`${projectName} preview image`}
      width={0}
      height={0}
      priority
      className="h-auto w-full"
    />
  </div>
);

export default PreviewImage;
