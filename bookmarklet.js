javascript:h=location.href;i=h.indexOf(%27imdb.com%27);p=h.indexOf(%27https://pro-labs.imdb.com%27);t=h.indexOf(%27title%27);c=h.indexOf(%27combined%27);f=h.indexOf(%27fullcredits%27);if(i==-1){window.location=%27http://pro-labs.imdb.com/name/nm2825198/%27}else%20if(p==0){window.location=h.replace(%27https://pro-labs%27,%27http://www%27)}else%20if(p==-1){if((t>1)&&(c>1)){h=h.substring(0,c)}else%20if((t>1)&&(f>1)){h=h.substring(0,f+11)};window.location=h.replace(/http:\/\/[a-z]+/,%27http://pro-labs%27);};
