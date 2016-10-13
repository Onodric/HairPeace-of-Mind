
var productArray = [
  {
    productName: 'Zachs',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Zach',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Zach',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Sam',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Sam',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Sam',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Top Secret 18 by Jonas R',
    description: '100% REmy Human Hair| Color 6RN Brown with Light Red Golden',
    productPrice: '$ 1161.25',
    imgURL: 'images/js-jkc-wig1.jpg',
  },
  {
    productName: 'Top Style Exclusive By Judy J',
    description: '100% Remy HUman Hair| Color 6RN Red Golden Brown',
    productPrice: '$ 1389.75',
    imgURL: 'images/js-jkc-wig2.jpg',
  },
  {
    productName: 'Top Style HH 12 Exclusive By Jay Jeane',
    description: 'Top Style 12" Exclusive | 100% Remy Human Hair | Color 12FS8 Light Golden Brown',
    productPrice: '$ 1998.90',
    imgURL: 'images/js-jkc-wig3.jpg',
  },
  {
    productName: 'Better Days Adult',
    description: 'You\'re never too old to relive the "good ol\' days" with our Better Days Experience!<br><em>Covered by MediCare</em>',
    productPrice: '$259.97',
    imgURL: 'images/never-too-old.jpg',
  },
  {
    productName: 'Better Days Child',
    description: 'The future is now with our Better Days Experience Child Edition!<br><em>Covered by most WIC programs</em>',
    productPrice: '$65.37',
    imgURL: 'images/never-too-young.jpg',
  },
  {
    productName: 'Model 241',
    description: 'Our best seller in Portland! Put a bird on it with this outrageous combo deal!',
    productPrice: '$598.71',
    imgURL: 'images/two-for-one.jpg',
  }
];

var injectionDOM = '';
var injectPoint = document.getElementById('insertIntoMe');

for (let i = 0; i < productArray.length; i++) {
  

  let injectTitle = '<article class="card"><div class="container"><header><h1>' + productArray[i].productName;
  let injectAnchorURL = '</h1></header><section><a href="' + productArray[i].imgURL;
  let injectImage = '"><img src="' + productArray[i].imgURL;
  let injectDesc = '" class="img-product"></a><p class="desc-text">' + productArray[i].description;
  let injectPrice = '</p></section><section class="pricing"><header><h3>Pricing</h3></header><p>' + productArray[i].productPrice;
  let injectEnd = '</p></section></div></article>';

  injectionDOM += injectTitle + injectAnchorURL + injectImage + injectDesc + injectPrice + injectEnd;

};

injectPoint.innerHTML = injectionDOM;
