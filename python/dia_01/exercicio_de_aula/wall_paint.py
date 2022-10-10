def wall_paint(sqr_meters):
    price = 80
    liters_needed = sqr_meters / 3
    buckets = liters_needed // 18
    if liters_needed % 18:
        buckets += 1
    
    print(buckets, buckets * price)


wall_paint(30)