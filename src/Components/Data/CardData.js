import { FaFile } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { GiMusicSpell } from "react-icons/gi";
const CardData=[
    {
        id:1,
        icon:FaFile,
        description:"This is a dummy description of card 1 as it should be",
        downloadSize:"0.5",
        actionIcon:IoMdDownload,
        extraFooter:{isOpen:true, extraFooterContent:"Download Now...", color:"bg-emerald-900"}
    },
    {
        id:2,
        icon:GiMusicSpell,
        description:"and hence forth, this is description of second card",
        downloadSize:"0.5",
        actionIcon:FaPlay,
        extraFooter:{isOpen:false, extraFooterContent:"_____________"}
    },
    {
        id:3,
        icon:FaFile,
        description:"so on and so forth this is description of 3rd card",
        downloadSize:"0.8",
        actionIcon:IoMdDownload,
        extraFooter:{isOpen:false, extraFooterContent:"_____________"}
    }
]

export default CardData