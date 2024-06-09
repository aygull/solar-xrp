import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default async function EnergyConsumption() {

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Energy consumption
      </h2>
      <Image
        src="/image.png"
        width={1000}
        height={1000}
        alt="Energy Consumption over one week"
      />
    </div>
  );
}
