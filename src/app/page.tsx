"use client"

import Homes from "./home/page"
import Preload from "../components/Preload/preload"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [loadingPreloader, setLoadingPreloader] = useState<boolean>(true)
  const [endedLoading, setEndedLoading] = useState<boolean>(false)

  useEffect(() => {
    const body = document.querySelector("body")

    if (loadingPreloader) {
      body?.classList.add("overflow-hidden")
      setTimeout(() => {
        setLoadingPreloader(false)
      }, 4000)
      setTimeout(() => {
        setEndedLoading(true)
      }, 3000)
    } else {
      body?.classList.remove("overflow-hidden")
    }
  }, [loadingPreloader])

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  if (loadingPreloader) {
    return (
      <>
        <AnimatePresence mode="wait" initial={true}>
          {loadingPreloader && <Preload endedLoading={endedLoading} />}
        </AnimatePresence>
      </>
    )
  }

  if (!loadingPreloader) {
    return (
      <motion.main
        data-scroll-container
        className="flex flex-col items-center"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <Homes />
      </motion.main>
    )
  }
}
