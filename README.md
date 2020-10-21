> Jim Carroll |
> 10/21/2020 |
> [GitHub Profile](https://github.com/pulamusic)

---

# Creating some page templates

The purpose of this repository is to:
1. Create a number of boilerplate page layouts that I can quickly put to use
2. Begin to define my base styles for web design and development
3. Because I work with a few static site generators, each page template will also include a directory of partials and templates, marked up with a templating language (Liquid, Handlebars?).
4. Both styled only with Sass, and styled using CSS frameworks (Bootstrap, Foundation, Tachyons?)

---

## Releases

10/21/2020 [v1.0.0](https://github.com/pulamusic/page-templates/releases/tag/v1.0.0): Initial release of repository information.

---

## Fair Use

Being both a teacher and a Socialist, I believe in the general policy of [fair use](https://www.copyright.gov/fair-use/more-info.html "Fair Use") as [defined by U.S. copyright law](https://www.copyright.gov/title17/92chap1.html#107 "Copyright Law"). As such, I say take it and do what you will. Please do pay attention, though, to the very liberal terms laid out in the two licenses I have outlined in the [LICENSE.md](https://github.com/pulamusic/page-templates/blob/master/LICENSE.md "Licenses").

## Clone this repo

*Please be mindful that the content of the repository will be constantly changing as I add and edit content.*

Otherwise, feel free to clone and reuse any content from this repository. To clone the entire repository, follow these procedures.
* On your machine's terminal, navigate to a parent directory and enter `git clone https://github.com/pulamusic/page-templates.git`
* You will now have a new directory titled `/page-templates` with as many boilerplate templates as I have presently added.
* Bear in mind that some of the template files have [NPM dependencies](https://www.npmjs.com/). If so, follow the directions in that directory's README file.

## Contribute to this repo

Please feel free to suggest additions and improvements, both big and small. Check out the [contributing.md](https://github.com/pulamusic/page-templates/blob/master/contributing.md) file for how to proceed.

---

Some template code I might use to add technology badges to my portfolio site.

```css
	.technologies-list {
		padding: 5px;
		background-color: $lt-bg-color; /* rgba(219, 212, 218, 0.1) */
	}

	.unstyled {
	    list-style: none outside none;
	    padding-left: 0;
	}

	.unstyled li {
	    list-style: none outside none;
	}

	ul.technologies a {
	    background: url(/themes/ab2019/images/sprite/technologies--blue-dark.svg) no-repeat 50% 0;
	    display: block;
	    margin: 40px auto;
	    overflow: hidden;
	    text-indent: -9999px;
	}

	ul.technologies li.symfony a {
	    background-position: 50% 0;
	    height: 78px;
	    width: 74px;
	}

	ul.technologies li.drupal a {
	    background-position: 50% -90px;
	    height: 36px;
	    width: 132px;
	}

	ul.technologies li.wordpress a {
	    background-position: 50% -140px;
	    height: 56px;
	    width: 130px;
	}

	ul.technologies li.javascript a {
	    background-position: 50% -210px;
	    height: 36px;
	    width: 50px;
	}

	ul.technologies li.nodejs a {
	    background-position: 50% -260px;
	    height: 40px;
	    width: 146px;
	}

	@media (min-width:768px){
	  h4.h1-font-size {
      margin-top: 130px;
      text-align: left;
	  }
	  ul.technologies {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
	  }
	}
```

```html
	<div class="technologies-list">
		<h4>Jim develops web pages &amp; sites using these technologies (and others)</h4>
		<ul class="unstyled technologies">
			<li class="symfony"><a href="https://symfony.com/" target="_blank">Symfony</a></li>
			<li class="drupal"><a href="https://drupal.org/" target="_blank">Drupal</a></li>
			<li class="wordpress"><a href="https://wordpress.org/" target="_blank">WordPress</a></li>
			<li class="javascript"><a href="https://www.javascript.com/" target="_blank">JavaScript</a></li>
			<li class="nodejs"><a href="https://nodejs.org/en/" target="_blank">NodeJS</a></li>
		</ul>
	</div>
```

---

# Thanks and welcome.
