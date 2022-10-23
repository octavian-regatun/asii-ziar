import Author from './Editor'

const fakeData=[
    {
        img:'https://xsgames.co/randomusers/assets/avatars/male/10.jpg',
        name:'Robert Popescu',
        nrPosts:4,
        role:'redactor',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet odio faucibus, scelerisque."
    },
    {
        img:'https://xsgames.co/randomusers/assets/avatars/female/19.jpg',
        name:'Maria Enescu',
        nrPosts:1,
        role:'redactor',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet odio faucibus, scelerisque."
    },
    {
        img:'https://randomuser.me/api/portraits/men/19.jpg',
        name:'Costel Prajitura',
        nrPosts:6,
        role:'redactor',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet odio faucibus, scelerisque."
    },
    {
        img:'https://xsgames.co/randomusers/assets/avatars/female/61.jpg',
        name:'Nush Altenume',
        nrPosts:12,
        role:'redactor $ef',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet odio faucibus, scelerisque."
    },
    {
        img:'https://xsgames.co/randomusers/assets/avatars/female/69.jpg',
        name:'Alexa Smith',
        nrPosts:9,
        role:'redactor',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet odio faucibus, scelerisque."
    },
    {
        img:'https://xsgames.co/randomusers/assets/avatars/male/51.jpg',
        name:'Stefan Ionescu',
        nrPosts:4,
        role:'redactor',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet odio faucibus, scelerisque."
    }
]
const EditorsComponent = () => {
    return (
        <div>
       <h3 className='m-2 font-sans'>Meet our <span className='font-semibold'>editors</span></h3>
        <div className="flex justify-around flex-wrap bg-slate-200">
            
            {
            fakeData.map((author, index) => {
                return (
                    
                    <Author data={author} key={`author-${index}`}/>
                )
            })
        }
            </div>
        </div>
    );
}

export default EditorsComponent;