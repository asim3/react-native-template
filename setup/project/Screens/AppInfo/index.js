import React from "react";
import { Button, View, Text, TextInput } from 'react-native';

import styles from "./styles";
import ScreenBase from "../../components/ScreenBase"
import TextHeader from "../../components/TextHeader"


export default function AppInfoScreen({ navigation }) {
    return (
        <ScreenBase style={styles.container}>
            <View>

                <TextHeader>
                    Mobile app
                </TextHeader>

                <Text>

                    A mobile application, also referred to as a mobile app or simply an app, is a
                    computer program or software application designed to run on a mobile device
                    such as a phone, tablet, or watch. Mobile applications often stand in contrast
                    to desktop applications which are designed to run on desktop computers, and
                    web applications which run in mobile web browsers rather than directly on
                    the mobile device.

                    Apps were originally intended for productivity assistance such as email,
                    calendar, and contact databases, but the public demand for apps caused
                    rapid expansion into other areas such as mobile games, factory automation,
                    GPS and location-based services, order-tracking, and ticket purchases, so
                    that there are now millions of apps available. Many apps require Internet
                    access. Apps are generally downloaded from app stores, which are a type of
                    digital distribution platforms.

                    The term "app", short for "software application", has since become very
                    popular; in 2010, it was listed as "Word of the Year" by the American
                    Dialect Society.

                    Apps are broadly classified into three types: native apps, hybrid and
                    web apps. Native applications are designed specifically for a mobile
                    operating system, typically iOS or Android. Web apps are written in HTML5
                    or CSS and typically run through a browser. Hybrid apps are built using web
                    technologies such as JavaScript, CSS, and HTML 5 and function like web apps
                    disguised in a native container.

                </Text>


                <TextHeader>Overview</TextHeader>

                <Text>

                    Most mobile devices are sold with several apps bundled as pre-installed software, such as a web browser, email client, calendar, mapping program, and an app for buying music, other media, or more apps. Some pre-installed apps can be removed by an ordinary uninstall process, thus leaving more storage space for desired ones. Where the software does not allow this, some devices can be rooted to eliminate the undesired apps.

                    Apps that are not preinstalled are usually available through distribution platforms called app stores. These may operated by the owner of the device's mobile operating system, such as the App Store (iOS) or Google Play Store; by the device manufacturers, such as the Galaxy Store and Huawei AppGallery; or by third parties, such as the Amazon Appstore and F-Droid.

                    Usually, they are downloaded from the platform to a target device, but sometimes they can be downloaded to laptops or desktop computers. Apps can also be installed manually, for example by running an Android application package on Android devices.

                    Some apps are freeware, while others have a price, which can be upfront or a subscription. Some apps also include microtransactions and/or advertising. In any case, the revenue is usually split between the application's creator and the app store.[3] The same app can, therefore, cost a different price depending on the mobile platform.

                    Mobile apps were originally offered for general productivity and information retrieval, including email, calendar, contacts, the stock market and weather information. However, public demand and the availability of developer tools drove rapid expansion into other categories, such as those handled by desktop application software packages. As with other software, the explosion in number and variety of apps made discovery a challenge, which in turn led to the creation of a wide range of review, recommendation, and curation sources, including blogs, magazines, and dedicated online app-discovery services. In 2014 government regulatory agencies began trying to regulate and curate apps, particularly medical apps.[4] Some companies offer apps as an alternative method to deliver content with certain advantages over an official website.

                </Text>

            </View>
        </ScreenBase>
    );
}
