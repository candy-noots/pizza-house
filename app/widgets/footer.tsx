import React from "react";
import { Box, Container, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import { grey } from "@mui/material/colors";


export default function Footer() {
  const data = [
    {
      id: 1,
      title: "Головна",
      link: "/",
    },
    {
      id: 2,
      title: "Ресторани",
      link: "/",
    },
    {
      id: 3,
      title: "Відгуки",
      link: "/",
    },
    {
      id: 4,
      title: "Акції",
      link: "/",
    },
    {
      id: 5,
      title: "Новини",
      link: "/",
    },
    {
      id: 6,
      title: "Бонусна програма",
      link: "/",
    },
    {
      id: 7,
      title: "Умови доставки",
      link: "/",
    },
    {
      id: 8,
      title: "Бенкети",
      link: "/",
    },
    {
      id: 9,
      title: "Про компанію Pizza House",
      link: "/",
    },
    {
      id: 10,
      title: "Вакансії",
      link: "/",
    },
    {
      id: 11,
      title: "Зв'язок з Керівництвом",
      link: "/",
    },
    {
      id: 12,
      title: "Оферта",
      link: "/",
    },
    {
      id: 13,
      title: "Умови компанії",
      link: "/",
    },
  ];
  return <Box display="flex" justifyContent="space-between" bgcolor={grey[100]} p={3}>
    <Container maxWidth="md">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {data.map(e => {
            return <Typography key={e.id} component={"div"} sx={{ cursor: "pointer" }} mt={0.5} fontWeight={400}>
              {e.title}
            </Typography>
          })}
        </Box>
        <Box>
          <img src="https://pizzahouse.ua/_next/static/media/google_play.6ba3105b.svg" alt="google play" className="w-40 h-30" />
          <img src="https://pizzahouse.ua/_next/static/media/app_store.79c3e27c.svg" alt="app store play" className="w-40 h-30 mt-2" />
          <Box display="flex" mt={2} gap={1.5}>
            <InstagramIcon
              sx={{ width: 45, height: 45, cursor: "pointer" }}
            />
            <FacebookIcon
              sx={{ width: 45, height: 45, cursor: "pointer" }}
            />
            <TelegramIcon
              sx={{ width: 45, height: 45, cursor: "pointer" }}
            />
          </Box>
        </Box>

      </Box>
      <Typography variant="subtitle2" textAlign="center">
        Copyright

        © 2008-2023 Pizza House
      </Typography>
    </Container>
  </Box>;
}
