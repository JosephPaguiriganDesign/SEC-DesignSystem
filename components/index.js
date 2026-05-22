/**
 * Public entry for the SCE.com Design System components package.
 *
 * Engineers import from a single path:
 *   import { Button, TextField, T } from 'components';
 */

export { default as T } from './tokens';
export * as tokens from './tokens';
export * as icons from './icons';

/* Brand */
export { default as SCELogo }        from './SCELogo';
export { default as EdisonBrand }    from './EdisonBrand';
export { default as AvatarCircle }   from './AvatarCircle';

/* Atoms (canonical SCE C03) */
export { default as Button }         from './Button';
export { default as TextField }      from './TextField';
export { default as Select }         from './Select';
export { default as Dropdown }       from './Dropdown';
export { default as Checkbox }       from './Checkbox';
export { default as Radio }          from './Radio';
export { default as Toggle }         from './Toggle';
export { default as TextArea }       from './TextArea';
export { default as DatePicker }     from './DatePicker';
export { default as Alert }          from './Alert';
export { default as Tabs }           from './Tabs';
export { default as Breadcrumb }     from './Breadcrumb';
export { default as Tooltip }        from './Tooltip';
export { default as Modal }          from './Modal';
export { default as Divider }        from './Divider';
export { default as SectionTitle }   from './SectionTitle';
export { default as Status }         from './Status';
export { default as Accordion, AccordionItem } from './Accordion';
export { default as StepIndicator }  from './StepIndicator';
export { default as CTAArrow }       from './CTAArrow';
export { default as LanguageSelector } from './LanguageSelector';
export { default as CopyBlock }      from './CopyBlock';
export { default as Table }          from './Table';
export { default as LoginModal }     from './LoginModal';
export { default as SurveyBlock }    from './SurveyBlock';

/* Patterns */
export { default as Header }           from './Header';
export { default as Footer }           from './Footer';
export { default as SocialRow }        from './SocialRow';
export { default as HeroBanner }       from './HeroBanner';
export { default as QuickActionGrid }  from './QuickActionGrid';
export { default as FeaturedCard }     from './FeaturedCard';
export { default as StickyBlock }      from './StickyBlock';
export { default as TargetedPromo }    from './TargetedPromo';
export { default as FAQBlock }         from './FAQBlock';
export { default as HomepageHeroContent } from './HomepageHeroContent';

/* Navigation */
export { default as GlobalHeader }           from './GlobalHeader';
export { default as GlobalHeaderMobile }     from './GlobalHeaderMobile';
export { default as MobileMenuHeader }       from './MobileMenuHeader';
export { default as NavAccordionMenu }       from './NavAccordionMenu';
export { default as QuickLinksMenu }         from './QuickLinksMenu';
export { default as Pagination }             from './Pagination';
export { default as ReadMoreLink }           from './ReadMoreLink';
export { default as AlertsNotificationsMenu } from './AlertsNotificationsMenu';
export { default as SyndicatedContentList } from './SyndicatedContentList';
export { default as QuickLinksHeader }      from './QuickLinksHeader';
export { default as ExternalLink }          from './ExternalLink';
