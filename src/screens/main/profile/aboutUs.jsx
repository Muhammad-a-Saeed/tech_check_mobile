import {View, Text} from 'react-native';
import React from 'react';
import {AppScrollView, AppText, Header, Screen} from '../../../components';
import {COLORS} from '../../../theme';

const AboutUs = () => {
  return (
    <Screen>
      <Header title="About Us" />

      <AppScrollView>
        <AppText style={{color: COLORS.greyText}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus lorem amet, tempor, tincidunt et nec, massa hac. Velit mi hendrerit tempor
          sit ac, velit egestas. Morbi varius scelerisque vestibulum sit. Sit elementum blandit turpis sit diam egestas. Cursus pretium posuere enim
          mi viverra. Adipiscing ultrices nullam amet, nunc ipsum fermentum ut. Sapien vestibulum, posuere volutpat, fermentum id enim sit. Platea
          quis nisi, amet, sem dignissim integer. Sit est accumsan nunc turpis semper dui eget vitae potenti. Vitae tortor ultrices donec dictum
          mauris at parturient. Odio augue habitasse velit accumsan augue pulvinar enim. Quis etiam arcu natoque mauris malesuada. Mauris arcu,
          nascetur vitae, leo. Ornare dui eu nam pretium.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus lorem amet, tempor,
          tincidunt et nec, massa hac. Velit mi hendrerit tempor sit ac, velit egestas. Morbi varius scelerisque vestibulum sit. Sit elementum blandit
          turpis sit diam egestas. Cursus pretium posuere enim mi viverra. Adipiscing ultrices nullam amet, nunc ipsum fermentum ut. Sapien
          vestibulum, posuere volutpat, fermentum id enim sit. Platea quis nisi, amet, sem dignissim integer. Sit est accumsan nunc turpis semper dui
          eget vitae potenti. Vitae tortor ultrices donec dictum mauris at parturient. Odio augue habitasse velit accumsan augue pulvinar enim. Quis
          etiam arcu natoque mauris malesuada. Mauris arcu, nascetur vitae, leo. Ornare dui eu nam pretium.
        </AppText>
      </AppScrollView>
    </Screen>
  );
};

export default AboutUs;
