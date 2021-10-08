import React, { Dispatch, ReactNode, SetStateAction, useState } from "react"


interface GenreIdProviderProps {
    children: ReactNode
}

interface selectedGenreIdState {
    selectedGenreId: number;
    setSelectedGenreId: Dispatch<SetStateAction<number>>;
  }

export const SelectedGenreIdContext = React.createContext({} as selectedGenreIdState);


export function GenreIdProvider(props: GenreIdProviderProps){
    const [selectedGenreId, setSelectedGenreId] = useState<number>(1);

    return (
        <SelectedGenreIdContext.Provider value={{selectedGenreId, setSelectedGenreId}}>
            {props.children}
        </SelectedGenreIdContext.Provider>
    )
}
