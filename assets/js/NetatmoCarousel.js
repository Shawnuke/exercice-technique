class NetatmoCarousel
{
    constructor($container)
    {
        this.$container = $container
        
        this.setSlides()
        this.setSiblings()      // I call "siblings" the arrows on the sides in order to run the carousel
        this.setAuto()      
        this.setPagination()
        this.goTo(0)
    }

    setSlides()
    {
        this.slides = {}
        this.slides.$items = this.$container.querySelectorAll('.slide')
        this.slides.index = 0
    }

    setSiblings()
    {
        this.siblings = {} // {} = "un objet"
        this.siblings.active = !!this.$container.dataset.siblings       // dataset nous permet d'accéder aux propriétés data du html
                                                                        // '!true', ça fait false

        // Siblings not active
        if(!this.siblings.active)       // "si ce n'est pas actif"
        {
            return      // on sort de la fonction
        }

        // Create DOM
        this.siblings.$previous = document.createElement('button')
        this.siblings.$previous.classList.add('sibling', 'previous')
        this.$container.appendChild(this.siblings.$previous)
        
        this.siblings.$next = document.createElement('button')
        this.siblings.$next.classList.add('sibling', 'next')
        this.$container.appendChild(this.siblings.$next)
        
        // Listen to click
        this.siblings.$previous.addEventListener('click', () =>
        {
            this.previous()
        })

        this.siblings.$next.addEventListener('click', () =>
        {
            this.next()
        })
    }

    setAuto()
    {
        this.auto = {}
        this.auto.active = !!this.$container.dataset.auto

        // Auto not active
        if(!this.auto.active) // si l'auto n'est pas activé, la fonction s'arrête
        {
            return
        }

        this.auto.start = () =>
        {
            this.auto.interval = window.setInterval(() =>
            {
                this.next() // goes to next slide at the end of the delay
            }, 2000)
        }

        this.auto.stop = () =>
        {
            window.clearInterval(this.auto.interval)
        }

        this.auto.start()

        this.$container.addEventListener('mouseenter', () =>
        {
            this.auto.stop()
        })

        this.$container.addEventListener('mouseleave', () => 
        {
            this.auto.start()
        })
    }

    setPagination()
    {
        this.pagination = {}
        this.pagination.active = !!this.$container.dataset.pagination

        // Pagination not active
        if(!this.pagination.active)
        {
            return
        }

        // Create DOM
        this.pagination.$container = document.createElement('div')
        this.pagination.$container.classList.add('pagination')
        this.$container.appendChild(this.pagination.$container)

        this.pagination.$items = []

        for(let i = 0; i < this.slides.$items.length; i++)
        {
            const $page = document.createElement('button')
            $page.classList.add('page')
            this.pagination.$container.appendChild($page) // on les balance dans le DOM

            $page.addEventListener('click', () =>
            {
                this.goTo(i)
            })

            this.pagination.$items.push($page) // je sauvegarde ça dans le tableau vide.
        }
    
    }

    previous()
    {
        let index = this.slides.index - 1

        if(index < 0)
        {
            index = this.slides.$items.length - 1
        }

        this.goTo(index)
    }

    next()
    {
        let index = this.slides.index + 1

        if(index > this.slides.$items.length - 1)
        {
            index = 0
        }

        this.goTo(index)
    }

    goTo(_index)
    {
        // Update slide classes
        for(let i = 0; i < this.slides.$items.length; i++)
        {
            const $slide = this.slides.$items[i]

            if(i < _index)
            {
                $slide.classList.add('is-before')
                $slide.classList.remove('is-current', 'is-after')
            }
            else if(i === _index) 
            {
                $slide.classList.add('is-current')
                $slide.classList.remove('is-before', 'is-after')
            }
            else
            {
                $slide.classList.add('is-after')
                $slide.classList.remove('is-before', 'is-current')
            }
        }

        // Update pagination classes
        for(let i = 0; i < this.pagination.$items.length; i++)
        {
            const $page = this.pagination. $items[i] // je récupère chacune des page

            if(i === _index) // si i correspond à l'index
            {
                $page.classList.add('is-active') // je rajoute la classe active
            }
            else    // sinon
            {
                $page.classList.remove('is-active') // j'enlève la classe active
            }
        }

        // Save index
        this.slides.index = _index
    }
}