import {
  AddressCard,
  CompanyInfoCard,
  PersonalInfoCard,
  ProfileHeader,
} from "@/components/PANEL/propertyManagerPanel/pages/propertyManagerProfile/propertyManagerProfile";
import { Typography } from "@mui/material";
export default function ProfileManagerProfilePage() {
  return (
    <>
      <Typography variant="h5" color="text.primary2" mb={2}>
        My Profile
      </Typography>
      <ProfileHeader />
      <PersonalInfoCard />
      <CompanyInfoCard />
      <AddressCard />
    </>
  );
}
