import { useState } from "react"
import { getMetarDataByIcaoCode } from "./helpers"
import { Airport } from "@/types/Airport"
import SearchBox from "./SearchBox"
import SubmitButton from "./SubmitButton"

type Prop = {
  airportList: Airport[],
  setAirportList: (airportList: Airport[]) => void,
  setModalMessage: (modal: string) => void
}

const Search = ({ airportList, setAirportList, setModalMessage }: Prop) => {
  const [icaoCode, setIcaoCode] = useState<string>("");

  const callEndpoint = (event: any) => {
    event.preventDefault();
    getMetarDataByIcaoCode(icaoCode, airportList, setAirportList, setModalMessage);
  }

  return (
    <div className="mx-4 mt-2 p-4 flex flex-grow justify-center">
      <form onSubmit={callEndpoint}>
        <div className="flex flex-row text-black">
          <SearchBox icaoCode={icaoCode} setIcaoCode={setIcaoCode} />
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}

export default Search