import { defineConfig, loadEnv } from "vite";
import tailwindcss from "tailwindcss";
import pugPlugin from "vite-plugin-pug";
import icons from "./icons.svg";
import { viteSingleFile } from "vite-plugin-singlefile";

const options = {};
const locals = {
  amplicode_version: process.env.VITE_AMPLICODE_VERSION,
  documentation_and_guides: [
    {
      icon: { src: icons.Globe, alt: "Document icon" },
      link: { href: "" },
      title: "Amlpicode Documentation",
    },
    {
      icon: { src: icons.GitHub, alt: "GitHub icon" },
      link: { href: "" },
      title: `What’s New in Amplicode ${process.env.VITE_AMPLICODE_VERSION}`,
    },
    {
      icon: { src: icons.YouTube, alt: "YouTube icon" },
      link: { href: "" },
      title: "Amplicode для разработки Spring Boot",
    },
    {
      icon: { src: icons.YouTube, alt: "YouTube icon" },
      link: { href: "" },
      title: "Умное автодополнение derived методов Spring Data Repository",
    },
    {
      icon: { src: icons.YouTube, alt: "YouTube icon" },
      link: { href: "" },
      title: "Flyway + Spring Boot",
    },
    {
      icon: { src: icons.YouTube, alt: "YouTube icon" },
      link: { href: "" },
      title: "Liquibase + Spring Boot",
    },
    {
      icon: { src: icons.YouTube, alt: "YouTube icon" },
      link: { href: "" },
      title:
        "Разрабатываем Admin UI на React Admin в VS Code вместе с Amplicode",
    },
  ],
  join_us: [
    {
      icon: { src: icons.Telegram, alt: "Telegram icon" },
      link: { href: "https://t.me/amplicode" },
      title: "Amplicode in Telegram",
    },
    {
      icon: { src: icons.YouTube, alt: "YouTube icon" },
      link: { href: "https://www.youtube.com/@amplicode" },
      title: "Amplicode in YouTube",
    },
    {
      icon: { src: icons.VK, alt: "VK icon" },
      link: { href: "https://vk.com/amplicode" },
      title: "Amplicode in VK",
    },
    {
      icon: { src: icons.GitHub, alt: "GitHub icon" },
      link: { href: "https://github.com/Amplicode/" },
      title: "Amplicode in GitHub",
    },
  ],
  suggestions: [
    {
      icon: { src: icons.Update, alt: "Update icon" },
      link: { action: "update_plugin" },
      title: "Configure Amplicode plugin repository for automatic updates",
    },
    {
      icon: { src: icons.Gear, alt: "Gear icon" },
      link: { action: "configure_project" },
      title: "Configure your project for best productivity",
    },
    {
      icon: { src: icons.Admin_UI, alt: "Admin UI icon" },
      link: { action: "create_admin_ui" },
      title: "Create Admin UI",
    },
  ],
  icons
};

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [pugPlugin(options, locals), viteSingleFile()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    define: {
      "process.env": process.env,
    },
  });
};
