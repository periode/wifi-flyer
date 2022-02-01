# Wifi-Flyer

repo for digital propaganda in public transport, part of the [Smart Border](https://smartborders.world/) project

## Credits

Most of the process was based on Jerry Le's [Rogue Portal](https://jerryryle.github.io/rogueportal/).

## How To

### Hardware

You will need:

- [Raspberry Pi Zero W](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) or [Raspberry Pi Zero 2](https://www.raspberrypi.com/products/raspberry-pi-zero-w/) (make sure that it has WiFi capabilities!)
- SD Card of at least 4Gb capacity
- Portable power supply, with at least 2500mAh. We use the [Intenso Slim Powerbank S2500](https://media.itscope.com/o/objects/mmo_29728885_1478250544_7341_6783.pdf)
- A box to put it all in (7cm x 11cm x 3cm)

### Software

You will need:

- [Raspberry Pi Imager](https://www.raspberrypi.com/software/)
- [Smart Border image](https://drive.google.com/file/d/1eU6jIbQRlcRVr8P86bTKLpCLH1J2THCQ/view?usp=sharing)

Use the Raspberry Pi Imager to flash the Smart Border image. First, unzip the `smartborder.zip` file you just downloaded. Second, open the Raspberry Pi Imager, click on `Choose OS`, select `Use Custom...`, and select the `.img` file you just downloaded. Third, select the SD Card you've just inserted into your computer, and finally, click `Write`.

Once the writing process is done, you can insert the SD card into your Pi, connect it to power, and test your Smart Border WiFi network! Open your WiFi manager on another device (laptop, smartphone), select the "Fast Free Wifi" network and the captive portal should show up.

## FAQ

If you're encountering any issues, you can open a [pull request](https://github.com/periode/wifi-flyer/pulls) or [email us](mailto:pierre.depaz@gmail.com) directly!
