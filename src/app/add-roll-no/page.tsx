import { HomeScreen } from "@/components/screens/HomeScreen";
import { ProfileMenuPopup } from "@/components/screens/ProfileMenuPopup";

/* Figma V2 — Add Roll No. (1:34598 light / 1:34997 dark): Home + profile popup
 * with the "Roll No." line (taller bubble). */
export default function AddRollNoPage() {
  return <HomeScreen overlay={<ProfileMenuPopup rollNo="Roll No. 12345678901" />} />;
}
