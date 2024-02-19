---
title: Finding a decent Minecraft launcher
header: Finding a decent Minecraft launcher
description: Six different Minecraft clients I tried and the reasons why I did or didn't end up keeping them (spoilers; they're all MultiMC forks or not FOSS)
tags: minecraft gaming review
permalink: /posts/finding-a-decent-minecraft-launcher/
layout: post
comments: true
toc: true
date: 2023-12-20 14:25:00 +0100
---
## Intro

I don't have a Minecraft account because I bought the game in 2011 and lost my account, yet I refuse to buy the game again for twice its original price. Screw you Microsoft I'm not paying for Bedrock edition.

I've been using TLauncher - the ORIGINAL TLauncher - for many years now, but as I switched from PC to PC I ended up with the infamous clone that was accused of being full of spyware not too long ago. I haven't played Minecraft in a good while so I didn't bother switching clients until a few days ago when I wanted to play for a bit and kept hearing that TLauncher isn't safe.

Blindly looking for a cracked Minecraft client that isn't full of malware is a difficult task, so I asked for recomendations and tried them all, then I got into the MultiMC forks rabbithole and tried some more.

In particular I was looking for a client to play 1.20.2 with Forge and a few specific mods, and for it to have some sort of skin support. These are the ones I tried, split into the ones I deleted and the ones I kept.

## Clients I deleted

### MultiMC

This was one I got recommended but it isn't cracked so it's useless for me. Nearly every client in this list is a fork of this one lmao.

[MultiMC website](https://multimc.org/)

### Salwyrr

According to the website they don't have the version I want (it said 1.8.9 - 1.19.2) but I decided to try nonetheless. I downloaded the .jar version and it told me to download the other version. uh. ok i guess.

I installed the .exe one and for some reason it opened up in windowed full screen in my second monitor. Weird. It also didn't load so I only had a dark gray window. Re-installed it and it finally worked. I rejected their cookies and opened up the settings but the only two settings are "RAM" and to modify my cookie preferences. I assume the RAM thing is maximum RAM.

The website was indeed correct and they only had up to version 1.19.2, but I still wanted to try it out so I launched version 1.12.2. It froze for a good while but it did work at the end. The menu and settings is completely revamped to match their dark gray minimalistic theme with iOS emojis, and they had a bunch of Hypixel specific mods and settings that I didn't touch. I tried creating a world aaaaand it's premium only. Apparently they removed offline accounts in March of this year for legal and partnership reasons.

So to the trash bin it goes.

[Salwyrr website](https://www.salwyrr.com/)

### PrismLauncher

MultiMC fork. It's not cracked :(

Apparently you can allow offline accounts by modifying the code and compiling it yourself but it's a bother and wouldn't let me use skins.

[PrismLauncher website](https://prismlauncher.org/)

## Clients I kept

### UltimMC

Another MultiMC fork, this one cracked, that allows local and Ely.by accounts.

Everything was perfect with this one but then I tried adding Forge to my 1.20.2 instance and it just wouldn't launch. I tried switching to every Java version I have (which are A LOT ngl) and still didn't work. Disabling Forge made it able to launch again and I also tried making a 1.12.2 Forge instance and it did work. So I have no clue of what's wrong.

Even though it didn't work at the end it seems like a puntual error (?) so I'm keeping it. I opened an issue on its repo so hopefully they'll fix it.

[UltimMC github](https://github.com/UltimMC/Launcher)

### PollyMC

A fork of PrismLauncher (and by extension a MultiMC fork) that allows offline accounts and alternative auth servers, like Ely.by or LittleSkin. Getting the alt auth servers to work is a bit trickier than in UltimMC since you need to input the URL of the page you're using but it's easy enough and explained in the documentation. It also lets you choose a mod loader as you create the instance instead of adding it later, which is nice.

However, unlike UltimMC, this one did manage to launch my beloved 1.20.2 Forge instance. 💞

[PollyMC github](https://github.com/fn2006/PollyMC)

### SKlauncher

The website is SO SLOW??? Huh????????

After waiting FOREVER to make an account and FOREVER to load my profile to edit it and EVEN MORE FOREVERS for the downloads page to work I finally got it and installed it. Loading also took forever, but that didn't bother me as much.

Sometimes it refuses to launch, though. Idk why.

The website has a whole section where you choose your skin and everything, but for some reason the client only lets you login with Microsoft or use an offline account. I thought "What? So there's no way of having skins? What was that section of the website for then?" but it turns out that the offline account takes the skin from the SKlauncher account from the website. Without asking for a password. Strange, but the only "stealable" thing there is your skin so it doesn't matter much.

The client itself has a modern minimalistic look and you can create instances with Forge, Fabric, Quill and everything. It also has a section for downloading modpacks and it seems that individual mod downloading is planned for version 3.3 of the launcher (I'm using 3.2).

I created the 1.20.2 instance and launched it, it uses the same folder as TLauncher so I was greeted by the mods I already had, which was a nice surprise since that meant that I didn't have to move anything.

Overall, it's good and it did what I wanted. I wish the program didn't give up on loading sometimes, though.

[SKlauncher website](https://skmedix.pl/)

## Conclusion

The conclusion is that my cheap forgetful ass wouldn't have so many problems if it stoped being cheap or forgetful. Since I would have a legal Minecraft account.

Currently I'm using PollyMC on virtue of it loading faster than SKlauncher, and I'm making sure that my old TLauncher stuff is in SKlauncher so that I can delete it for good. I'll probably end up keeping the one with the best skin support or one of the Github ones since they're FOSS.