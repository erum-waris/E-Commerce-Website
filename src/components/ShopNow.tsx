"use client"

import { useState } from 'react';

import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function ShopNowForm() {
  return (
    <div className="flex justify-center">

    <Card className="w-[350px]  ">
      <CardHeader>
        <CardTitle>Shop Now</CardTitle>
        <CardDescription>Place order in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Item  Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="collection"></Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Kurti & Trouser</SelectItem>
                  <SelectItem value="sveltekit">kurti/Top</SelectItem>
                  <SelectItem value="astro">Pants</SelectItem>
                  <SelectItem value="nuxt">Trousers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Done</Button>
      </CardFooter>
    </Card>
    </div>
  )
}