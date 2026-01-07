import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageId?: string;
}

const PageHeader = ({ title, subtitle, imageId }: PageHeaderProps) => {
  const image = imageId ? PlaceHolderImages.find(p => p.id === imageId) : null;

  return (
    <div className="relative h-[40vh] min-h-[300px] w-full">
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
