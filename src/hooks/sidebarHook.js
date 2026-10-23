import { useState } from "react";
import { setUser } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const useSideBar = () => {
    let name = useSelector((state) => state.user.user)
    let dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(name);



    const initials = name
        .split(" ")
        .filter(Boolean)
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    const startEdit = () => {
        setDraft(name);
        setIsEditing(true);
    };

    const saveName = (e) => {
        e.preventDefault();
        if (draft.trim()) dispatch(setUser(draft.trim()));
        setIsEditing(false);
    };

    return {
        initials, startEdit, saveName,name , dispatch, isOpen, setIsOpen, isEditing, setIsEditing, draft, setDraft
    }
}

export default useSideBar