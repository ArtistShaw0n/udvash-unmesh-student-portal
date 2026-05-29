/*
 * 1:1 from Figma V2 — node 1:9714 ("view-profile"), light + dark via .dark
 * Raw values, no semantic tokens:
 *   card:   bg #ffffff dark:#1a1a1a · rounded-[10px]
 *           light shadow 0 0 5px rgba(0,0,0,0.1) + 0 0 4px rgba(255,255,255,0.25)
 *           dark  shadow 0 0 4px rgba(255,255,255,0.25)
 *   avatar: 96px photo inside a 100px ring (profile-ring.svg), centered
 *   name:   Inter SemiBold 16px #616161 dark:#e8e8e8, centered
 *   reg:    Inter Regular 14px #616161 dark:#e8e8e8, centered
 *   divider #cacaca, then "Personal Info" / "Contact Info" 14px semibold #616161 dark:#e8e8e8
 *   rows:   "Label:  " 14px #535353 dark:#e8e8e8 · value SemiBold
 */

export type ProfileField = { label: string; value?: string };

export type ProfileCardProps = {
  name: string;
  registrationNo: string | number;
  avatarSrc?: string;
  personalInfo?: ProfileField[];
  contactInfo?: ProfileField[];
  className?: string;
};

export function ProfileCard({
  name,
  registrationNo,
  avatarSrc,
  personalInfo = [],
  contactInfo = [],
  className,
}: ProfileCardProps) {
  return (
    <article
      className={`w-[360px] rounded-[10px] bg-white p-[16px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] ${className ?? ""}`}
    >
      <div className="flex flex-col items-center">
        {avatarSrc && (
          <span className="relative block size-[100px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/components/icons/profile-ring.svg" alt="" aria-hidden="true" className="absolute inset-0 size-full" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarSrc}
              alt={name}
              className="absolute left-1/2 top-1/2 size-[96px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full object-cover"
            />
          </span>
        )}
        <p className="mt-[12px] text-center font-['Inter',sans-serif] text-[16px] font-semibold text-[#616161] dark:text-[#e8e8e8]">
          {name}
        </p>
        <p className="text-center font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]">
          Reg. No. {registrationNo}
        </p>
      </div>

      <div className="my-[16px] h-px w-full bg-[#cacaca]" />

      {personalInfo.length > 0 && (
        <div className="mb-[16px]">
          <p className="mb-[8px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161] dark:text-[#e8e8e8]">Personal Info</p>
          <FieldRows fields={personalInfo} />
        </div>
      )}
      {contactInfo.length > 0 && (
        <div>
          <p className="mb-[8px] font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161] dark:text-[#e8e8e8]">Contact Info</p>
          <FieldRows fields={contactInfo} />
        </div>
      )}
    </article>
  );
}

function FieldRows({ fields }: { fields: ProfileField[] }) {
  return (
    <div className="flex flex-col gap-[6px]">
      {fields.map((f) => (
        <p key={f.label} className="font-['Inter',sans-serif] text-[14px] text-[#535353] dark:text-[#e8e8e8]">
          {f.label}:{"  "}
          <span className="font-semibold">{f.value ?? "-"}</span>
        </p>
      ))}
    </div>
  );
}
