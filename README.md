![Banner](https://github.com/user-attachments/assets/cf3ffbe3-3b48-4fab-bd7e-f011928286fa)
<div align="center">
<img alt="GitHub Release" src="https://img.shields.io/github/v/release/prayag17/Blink?sort=date&display_name=tag&style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iODc4IiBoZWlnaHQ9IjEwMTIiIHZpZXdCb3g9IjAgMCA4NzggMTAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MzguODA5IDUwNkwzNS40MDQ4IDczOC45MDZMNDM4LjgwOSA5NzEuODEyTDg0Mi4yMTQgNzM4LjkwNlYyNzMuMDk0TDQzOC44MDkgNDAuMTg4NUwzNS40MDQ4IDI3My4wOTRMNDM4LjgwOSA1MDZaTTQzOC44MDkgMEw4NzcuMDE4IDI1M1Y3NTlMNDM4LjgwOSAxMDEyTDAuNjAwNTg2IDc1OVY3MTguODEyVjI5My4xODhWMjUzTDQzOC44MDkgMFoiIGZpbGw9IndoaXRlIi8%2BCjwvc3ZnPgo%3D&labelColor=000&link=https%3A%2F%2Fgithub.com%2Fprayag17%Blink%2Freleases%2Flatest">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/prayag17/Blink?style=for-the-badge&logo=github&labelColor=000&link=https%3A%2F%2Fgithub.com%2Fprayag17%Blink%2Fstargazers">
<img alt="GitHub License" src="https://img.shields.io/github/license/prayag17/Blink?style=for-the-badge&labelColor=000">  
<img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/prayag17/Blink/continuous-integration.yml?style=for-the-badge&logo=github&label=CI&labelColor=000&link=https%3A%2F%2Fgithub.com%2Fprayag17%Blink%2Factions%2Fworkflows%2Fcontinuous-integration.yml">
</div>

### 

> [!IMPORTANT]
> **JellyPlayer** has been renamed to **Blink** to avoid confusion with first party Jellyfin apps

## 📝 Prerequisites

- Nodejs (22.14.0)
- Rust (>=1.85.0)
- Visual Studio C++ Build tools
- [pnpm](https://pnpm.io/)

## ℹ️ Getting started

- Install Nodejs, pnpm and Rust.
  > **Note** : Install Rust from <https://www.rust-lang.org/learn/get-started>
- install depencies using pnpm:

  ```shell
  pnpm install
  ```

## 🛠️ Development

- Running the app:

  ```shell
  pnpm run tauri dev
  ```

- Building the app:

  ```shell
  pnpm run tauri build
  ```

- other commands can be found inside the `"scripts"` inside [package.json](https://github.com/prayag17/Blink/blob/main/package.json)

## 💻 Contribution

- Checkout `issues` to see currently worked on features and bugs
- Add features or fix bugs
- Create a pull request

## ✨ Features

- Play any media supported by the system (DirectPlay most files on windows, mac and linux)
- Clean and minimal UI.
- Multi Jellyfin server support
- Cross Platform
- Mediainfo recognition (DolbyVision, DolbyAtoms, Dts, Hdr10+, and more...)
- Sort/Filter library items
- Queue playback support 
- Intro Skip button using [jumoog/Intro-Skipper](https://github.com/jumoog/intro-skipper) plugin
- Mediasegment support

## 📷 Screenshots

- Home
  <img width="2560" height="1600" alt="Screenshot 2026-02-10 212208" src="https://github.com/user-attachments/assets/036c2339-e8f1-4c8d-a908-af0ece9bb1f3" />
- Library
  <img width="2560" height="1600" alt="Screenshot 2026-02-10 212723" src="https://github.com/user-attachments/assets/6520a325-3cf3-47a0-9056-b27aded4bb8c" />
- Music Player Detailed
  <img width="2560" height="1600" alt="Screenshot 2026-02-10 213017" src="https://github.com/user-attachments/assets/00a89efa-0a4c-4272-868e-f52c9fcfeaac" />
- Item Page
  <img width="2560" height="1600" alt="Screenshot 2026-02-10 212653" src="https://github.com/user-attachments/assets/5d281f8c-48ba-4787-b8ca-a4b86ccab5c1" />
- Album / Music Player
  <img width="2560" height="1600" alt="Screenshot 2026-02-10 212949" src="https://github.com/user-attachments/assets/d99aaea5-e242-4b3d-a5c5-d2868313728b" />
- Search Dialog
  <img width="2560" height="1600" alt="Screenshot 2026-02-10 212749" src="https://github.com/user-attachments/assets/4ad87072-86ad-4510-95a4-567d6d11e997" />
- Video Player
  <img width="2560" height="1600" alt="Screenshot 2026-02-10 213049" src="https://github.com/user-attachments/assets/effcca22-3650-46e1-9a86-b3b434851f2f" />


## 📃 Roadmap

- Checkout [GitHub Project](https://github.com/users/prayag17/projects/3)
  

## 🎊 Special thanks to

- [@ferferga](https://github.com/ferferga) for helping in development behind the scenes.
- All contributors of [jellyfin/jellyfin-vue](https://github.com/jellyfin/jellyfin-vue).
- And also [@jellyfin](https://github.com/jellyfin/) for creating the main service

