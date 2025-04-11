<h1 align="center">
<img
		width="900"
		alt="Skill Share - Expo"
		src="https://cdn.discordapp.com/attachments/897084050941038655/1360255701766901840/Screenshot_2025-04-11_at_7.39.48_PM.png?ex=67fa7457&is=67f922d7&hm=d0b94d78051dc318beb2a32f2f6b58e4dae61d9bf55eb8134eaa979cc0041613&">
</h1>
<h3 align="center">
	Skillink - The skill sharing app
</h3>

<p align="center">
	<img src="https://github.com/stevenpersia/tinder-expo/blob/master/preview/tinderclone-preview.gif" width="300">
</p>


## Overview

**Perfect to start an Tinder Clone app.** 4 screens are availables : Explore, Matches, Messages and Profile. You'll find some components like Card Component to pass props and variant. No frameworks UI like Bootstrap or Material UI are used.

- **Easy to use** 🤘
- **Made with Expo** ⚡
- **TypeScript supported** 🌞

This project was inspired by this [amazing Kishore's work on Dribbble](https://dribbble.com/shots/5631075-Dating-App-Sketch-Freebie-Day-334-365-Project365). Feel free to follow this guy because he does great stuff.

## Demo

You can try it here : https://expo.io/@stevenpersia/projects/tinder-expo

## Screenshots

<img
width="205"
alt="Capture 1"
src="https://github.com/stevenpersia/tinder-expo/blob/master/preview/capture-1.png">
<img
width="205"
alt="Capture 2"
src="https://github.com/stevenpersia/tinder-expo/blob/master/preview/capture-2.png">
<img
width="205"
alt="Capture 3"
src="https://github.com/stevenpersia/tinder-expo/blob/master/preview/capture-3.png">
<img
width="205"
alt="Capture 4"
src="https://github.com/stevenpersia/tinder-expo/blob/master/preview/capture-4.png">


## Installation and usage

Be sure, you have installed all dependencies and applications to run Expo project on your computer : [Getting Started with Expo](https://docs.expo.io/get-started/installation/).

This project works fine on iOS and Android.


### Running the project

Clone this repository :

```
git clone https://github.com/stevenpersia/tinder-expo.git
cd tinder-expo
```

Install packages :

```
yarn
```

When installation is complete, run it :

```
yarn start
```


## Props

### CardItem

| Name           | Type     | Required | Description                                               | Example                                             |
| -------------- | -------- | -------- | --------------------------------------------------------- | --------------------------------------------------- |
| `image`        | string   | Yes      | Picture of member.                                        | `image="https://..."`                               |
| `name`         | string   | Yes      | Name of member.                                           | `name="John Doe"`                                   |
| `description`  | string   | Yes      | Description of member.                                    | `description="Full-time Traveller. Globe Trotter."` |
| `matches`      | string   | Yes      | Match percentage.                                         | `matches="95"`                                      |
| `hasActions`   | boolean  | No       | Display actions buttons (Like, Dislike, ...).             | `actions`                                           |
| `isOnline`     | string   | No       | Display online or offline badge (`Online` and `Offline`). | `status="Online"`                                   |
| `hasVariant`   | boolean  | No       | Display another style of card (used for Matches screen).  | `variant`                                           |

### Message

| Name          | Type   | Required | Description             | Example                                                                                      |
| ------------- | ------ | -------- | ----------------------- | -------------------------------------------------------------------------------------------- |
| `image`       | string | Yes      | Picture of member.      | `image="https://..."`                                                                        |
| `name`        | string | Yes      | Name of member.         | `name="John Doe"`                                                                            |
| `lastMessage` | string | Yes      | Last message of member. | `lastMessage="You want order in Gotham. Batman must take off his mask and turn himself in."` |


### ProfileItem

| Name       | Type   | Required | Description                 | Example                                    |
| ---------- | ------ | -------- | --------------------------- | ------------------------------------------ |
| `name`     | string | Yes      | Name of member.             | `name="John Doe"`                          |
| `matches`  | string | Yes      | Match percentage.           | `matches="95"`                             |
| `age`      | string | No       | Age of member.              | `age="25"`                                 |
| `location` | string | No       | Location of member.         | `location="Paris, France"`                 |
| `info2`    | string | No       | More information of member. | `info2="Tea Totaller & Loves Photography"` |
| `info4`    | string | No       | More information of member. | `info4="Last seen: 23h ago"`               |


## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!
