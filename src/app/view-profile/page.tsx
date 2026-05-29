import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { ProfileCard } from "@/components/cards/ProfileCard";

/*
 * Figma V2 — View Profile screen. light node 1:9710 · dark node 1:9715.
 *   header (50) + view-profile card (360×605, y100) + footer-menu (y746).
 *   Field values reproduced verbatim from Figma.
 */
const personalInfo = [
  { label: "Nick Name", value: "Asif" },
  { label: "Gender", value: "Male" },
  { label: "Religion", value: "Islam" },
  { label: "Group" },
  { label: "Date of Birth" },
  { label: "Father’s Name" },
  { label: "Mother’s Name" },
];

const contactInfo = [
  { label: "Personal Mobile", value: "8801713787805" },
  { label: "Father’s Mobile" },
  { label: "Mother’s Mobile" },
  { label: "Email" },
];

export default function ViewProfilePage() {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <div className="relative mt-[50px] flex justify-center">
        <ProfileCard
          name="Asif Mahmood Ripon"
          registrationNo={1819361}
          avatarSrc="/components/images/profile-avatar.png"
          personalInfo={personalInfo}
          contactInfo={contactInfo}
        />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
