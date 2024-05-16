import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import pugPlugin from "vite-plugin-pug";

const AMPLICODE_VERSION = "2024.2";

const options = {};
const locals = {
  amplicode_version: AMPLICODE_VERSION,
  documentation_and_guides: [
    {
      icon: { src: "./icons/Document.svg", alt: "Document icon" },
      link: { href: "" },
      title: "Amlpicode Documentation",
    },
    {
      icon: { src: "./icons/GitHub.svg", alt: "GitHub icon" },
      link: { href: "" },
      title: `What’s New in Amplicode ${AMPLICODE_VERSION}`,
    },
    {
      icon: { src: "./icons/YouTube.svg", alt: "YouTube icon" },
      link: { href: "" },
      title: "Amplicode для разработки Spring Boot",
    },
    {
      icon: { src: "./icons/YouTube.svg", alt: "YouTube icon" },
      link: { href: "" },
      title: "Умное автодополнение derived методов Spring Data Repository",
    },
    {
      icon: { src: "./icons/YouTube.svg", alt: "YouTube icon" },
      link: { href: "" },
      title: "Flyway + Spring Boot",
    },
    {
      icon: { src: "./icons/YouTube.svg", alt: "YouTube icon" },
      link: { href: "" },
      title: "Liquibase + Spring Boot",
    },
    {
      icon: { src: "./icons/YouTube.svg", alt: "YouTube icon" },
      link: { href: "" },
      title:
        "Разрабатываем Admin UI на React Admin в VS Code вместе с Amplicode",
    },
  ],
  join_us: [
    {
      icon: { src: "./icons/Telegram.svg", alt: "Telegram icon" },
      link: { href: "https://t.me/amplicode" },
      title:
        "Amplicode in Telegram",
    },
    {
      icon: { src: "./icons/YouTube.svg", alt: "YouTube icon" },
      link: { href: "https://www.youtube.com/@amplicode" },
      title:
        "Amplicode in YouTube",
    },
    {
      icon: { src: "./icons/VK.svg", alt: "VK icon" },
      link: { href: "https://vk.com/amplicode" },
      title:
        "Amplicode in VK",
    },
    {
      icon: { src: "./icons/GitHub.svg", alt: "GitHub icon" },
      link: { href: "https://github.com/Amplicode/" },
      title:
        "Amplicode in GitHub",
    }
  ]
};

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
