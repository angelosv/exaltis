
export const font = 'Poppins'
//fonts
export const thinFontWeight         =   300
export const regularFontWeight      =   400
export const mediumFontWeight       =   500
export const semiFontWeight         =   600
export const boldFontWeight         =   700
export const extraBoldFontWeight    =   800
export const blackFontWeight        =   900

// body
export const bodyBg                 =   'white'
export const bodyColor              =   'abbey'
export const borderSize             =   2
// spacer
export const globalSpace            =   0.625


// button
export const btnPaddingV            =   globalSpace;
export const btnPaddingH            =   globalSpace * 2;

// header
export const headerHeight           =   6.063
export const smallHeaderHeight      =   3.875

// breakpoints
export const screenSmall            =   576
export const screenMedium           =   767
export const screenLarge            =   991
export const screenExtraLarge       =   1230
export const screenWide             =   1600

// breakpoints
export const breakpoints = {
  screenSmall       :               screenSmall,
  screenMedium      : 				screenMedium,
  screenLarge       : 				screenLarge,
  screenExtraLarge  :			    screenExtraLarge,
  constScreenWide   : 				screenWide
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '576px',
    tablet: '767px',
    laptop: '991px',
    laptopL: '1230px',
    desktop: '1600px',
    desktopL: '1800px',
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`
};

export const colors = {
    white: '#fff',
    lightBlack: '#55565b',
    SecondaryColor: '#17B8F3',
    darkGrey: '#212121',
    Blue: '#141629',
    footer: '#141629',
    lightGrey: '#919191',
    transparent: 'transparent',
    superLightGrey: '#F8F8F8',
    otherGrey: '#585E68'
}


export const style = {
    buttonBorderColor: colors.Blue,
    White: colors.white,
    PrimaryColor: colors.Blue,
    SecondaryColor: colors.SecondaryColor,
    lightGrey: colors.lightGrey,
    transparent: colors.transparent,
    superLightGrey: colors.superLightGrey,
    otherGrey: colors.otherGrey
}



/*
$icon-box-before: 			                     $white;
$icon-box-icon-color: 			                 $dark-grey;
$icon-box-title-color: 			                 $light-black;
$icon-box-link-color:			                 $light-black;
$icon-box-link-hover-color:			             $primary-color;
$icon-box-text-color:			                 $dark-grey;
$link-more-color:                                $dark-black;
$link-more-hover-color:                          $primary-color;
$icon-box-alternate-title-color:                 $white;
$icon-box-alternate-link-color:                  $white;
*/

export const textSlanted = `font-family:'Caveat', cursive;`

export const transDefault = 'transition:all 0.5s ease-in-out'
export const transFunction = (
    property = 'all',
    time = '0.5s',
    type = 'linear'
) => {
    return `transition:${property} ${time} ${type}`
}
export const transObject = ({
    property = 'all',
    time = '0.5s',
    type = 'ease-in-out',
}) => {
    return `transition: ${property} ${time} ${type}`
}

export const transition = ({
    property = 'all',
    time = '0.5s',
    type = 'ease-in-out',
}) => {
    return `transition: ${property} ${time} ${type}`
}

export const border = ({
    width = '0.15rem',
    type = 'solid',
    color = 'white',
}) => {
    return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = '0.1rem' }) => {
    return `letter-spacing:${spacing}`
}
