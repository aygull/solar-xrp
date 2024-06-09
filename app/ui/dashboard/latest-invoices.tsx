import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { HeartIcon } from '@heroicons/react/24/outline';


export default async function XRP() {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className='flex centered align items-baseline'>
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          XRP savings
        </h2>
        <HeartIcon className="h-5 w-5 text-gray-700"  />
      </div>
      <Image
        src="/XRP.png"
        width={1500}
        height={1500}
        alt="Energy Consumption over one week"
      />
    </div>
  );
}
