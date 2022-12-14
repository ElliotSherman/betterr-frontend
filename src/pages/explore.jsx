import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GigList } from "../cmps/gig-list"
import {
  loadGigs,
  setFilterBy,
  setCategory,
  setSearch,
} from "../store/gig.actions"
import { Filter } from "../cmps/filter"
import { useSearchParams } from "react-router-dom"
import { Loading } from "../cmps/loading"
import { utilService } from "../services/util.service"

export const Explore = () => {
  const gigs = useSelector((state) => state.gigModule.gigs)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const myInterval = useRef()

  useEffect(() => {
    dispatch(setCategory(searchParams.get("category")))
    dispatch(setSearch(searchParams.get("search")))
    onLoadGigs()

    return ()=>{
      clearTimeout(myInterval.current)
    }
  }, [searchParams])

  const onLoadGigs = () => {
    dispatch(loadGigs())
  }


  const onChangeFilter = (filterBy) => {
    clearInterval(myInterval.current)
    myInterval.current = setTimeout(() => {
      dispatch(setFilterBy(filterBy))
      dispatch(loadGigs())
    }, 500)
  }
  return (
    <div className="explore main-container">
      <h1 className="explore-title">
        {utilService.getExploreTitle(
          searchParams.get("search")
            ? searchParams.get("search")
            : searchParams.get("category")
        )}
      </h1>
      <Filter onChangeFilter={onChangeFilter} />
      <span className="services-available">
        {gigs.length} services available
      </span>
      {!gigs.length ? <Loading /> : <GigList gigs={gigs} />}
    </div>
  )
}
