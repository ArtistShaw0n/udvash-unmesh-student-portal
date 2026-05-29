/*
 * 1:1 from Figma V2 — node 1:27678 (Q&A sent-message card)
 * Raw values, no semantic tokens:
 *   card:   bg #ffffff · rounded-[5px] · px-[8px] py-[12px] · drop-shadow 0 0 2.5px rgba(0,0,0,0.03)
 *   header: "Me · Today · 11:01 PM" Inter SemiBold/Italic 12px #616161, right-aligned
 *   body:   Inter/Noto Regular 13px #616161 leading-[20px], right-aligned
 *   attach: 98×138 placeholder bg #e8e8e8 rounded-[5px] shadow
 *   status: "Question Accepted" Inter Regular 10px #2496c1, right
 */

export type QnACardProps = {
  author?: string;
  day?: string;
  time?: string;
  question: string;
  hasAttachment?: boolean;
  status?: string;
  className?: string;
};

export function QnACard({
  author = "Me",
  day = "Today",
  time = "11:01 PM",
  question,
  hasAttachment = false,
  status = "Question Accepted",
  className,
}: QnACardProps) {
  return (
    <div
      className={`flex w-[352px] flex-col items-end gap-[8px] rounded-[5px] bg-white px-[8px] py-[12px] drop-shadow-[0px_0px_2.5px_rgba(0,0,0,0.03)] ${className ?? ""}`}
    >
      <div className="flex items-center gap-[4px] font-['Inter',sans-serif] text-[12px] text-[#616161]">
        <span className="font-semibold">{author}</span>
        <span>·</span>
        <span className="italic">{day}</span>
        <span>·</span>
        <span className="italic">{time}</span>
      </div>
      <p className="w-full text-right font-['Inter',sans-serif] text-[13px] leading-[20px] text-[#616161]">
        {question}
      </p>
      {hasAttachment && (
        <div className="h-[138px] w-[98px] rounded-[5px] bg-[#e8e8e8] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]" />
      )}
      {status && (
        <p className="w-full text-right font-['Inter',sans-serif] text-[10px] text-[#2496c1]">{status}</p>
      )}
    </div>
  );
}
