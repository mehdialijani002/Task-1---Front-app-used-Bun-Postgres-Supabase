import {
  Box,
  Typography,
  Card,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { IoMdArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInputText } from "@/components/UI/TextField/FormInputText";
import { TopicAutocomplete } from "@/api/AutoComplete/mock/TopicAutoComplete";
import { faqs } from "@/components/LANDING/pages/contactus/faq";
const schema = yup.object({
  full_name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  topic: yup.string().required("Please select a topic"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function ContactHelpUI({
  selectedOption,
  setSelectedOption,
  options,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
  });
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };
  const activeFaqs = faqs[selectedOption] || [];

  const selectedLabel = options.find((o) => o.value === selectedOption)?.label;
  return (
    <Box
      sx={{
        pt: 5,
      }}
    >
      <Box sx={{ mx: { xs: 2, md: 8 }, mb: { xs: 4, md: 8 } }}>
        <Button
          startIcon={<IoMdArrowBack />}
          onClick={() => setSelectedOption(null)}
          color="inherit"
        >
          Back
        </Button>

        <Typography variant="h4" fontWeight={600} mt={3} mb={5}>
          {selectedLabel} – Frequently Asked Questions
        </Typography>

        <Stack spacing={2}>
          {activeFaqs.map((item, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                border: "1px solid #2372E580",
              }}
            >
              <Typography fontWeight={600} mb={1}>
                {item.q}
              </Typography>
              <Typography color="text.secondary">{item.a}</Typography>
            </Card>
          ))}
        </Stack>
      </Box>
      {/* <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          p: { xs: 2, md: 8 },
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" fontWeight={600}>
          Can’t find your answer?
        </Typography>

        <Typography variant="bodyLarge" color="text.secondary" mb={3} mt={2}>
          Fill out the form below and our care specialists will get in touch
          with you soon.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ maxWidth: "640px", mx: "auto", width: "100%" }}
        >
          <Stack spacing={2}>
            <FormInputText
              control={control}
              name="full_name"
              label="Full Name *"
              size="large"
            />
            <FormInputText
              control={control}
              name="email"
              label="Email address *"
              size="large"
            />

            <FormInputText
              control={control}
              name="phone"
              label="Phone Number *"
              size="large"
              type=""
            />

            <TopicAutocomplete name="topic" control={control} label="Topic *" />

            <FormInputText
              control={control}
              name="message"
              label="Message *"
              size="large"
              multiline
              rows={4}
            />
          </Stack>

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 4, textTransform: "none", mb: 2 }}
          >
            Submit Request
          </Button>
        </Box>
      </Box> */}
    </Box>
  );
}
