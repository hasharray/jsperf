---
title: destinationPoint vs intermediatePoint
setup: |
  function LatLon(lat, lng) {
      // allow instantiation without 'new'
      if (!(this instanceof LatLon)) return new LatLon(lat, lng);
  
      this.lat = Number(lat);
      this.lng = Number(lng);
  }
  
  A = LatLon(43.69071,49.603555)
  B = LatLon(30.2267,150.388418)
  distance = 23.76
  bearing = 228.047
  fraction = 0.578
tests:
  -
    name: destinationPoint
    code: |
      function LatLon(lat, lng) {
          // allow instantiation without 'new'
          if (!(this instanceof LatLon)) return new LatLon(lat, lng);
      
          this.lat = Number(lat);
          this.lng = Number(lng);
      }
      
      LatLon.prototype.destinationPoint = function(distance, bearing, radius) {
          radius = (radius === undefined) ? 6371e3 : Number(radius);
      
          // sinφ2 = sinφ1⋅cosδ + cosφ1⋅sinδ⋅cosθ
          // tanΔλ = sinθ⋅sinδ⋅cosφ1 / cosδ−sinφ1⋅sinφ2
          // see http://williams.best.vwh.net/avform.htm#LL
      
          var δ = Number(distance) / radius; // angular distance in radians
          var θ = Number(bearing).toRadians();
      
          var φ1 = this.lat.toRadians();
          var λ1 = this.lng.toRadians();
      
          var sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1);
          var sinδ = Math.sin(δ), cosδ = Math.cos(δ);
          var sinθ = Math.sin(θ), cosθ = Math.cos(θ);
      
          var sinφ2 = sinφ1*cosδ + cosφ1*sinδ*cosθ;
          var φ2 = Math.asin(sinφ2);
          var y = sinθ * sinδ * cosφ1;
          var x = cosδ - sinφ1 * sinφ2;
          var λ2 = λ1 + Math.atan2(y, x);
      
          return new LatLon(φ2.toDegrees(), (λ2.toDegrees()+540)%360-180); // normalise to −180..+180°
      };
      
      if (Number.prototype.toRadians === undefined) {
          Number.prototype.toRadians = function() { return this * Math.PI / 180; };
      }
      
      if (Number.prototype.toDegrees === undefined) {
          Number.prototype.toDegrees = function() { return this * 180 / Math.PI; };
      }
      
      for (i=0;i<10;i++){
          A.destinationPoint(distance, bearing);
      }
  -
    name: intermediatePoint
    code: |
      function LatLon(lat, lng) {
          // allow instantiation without 'new'
          if (!(this instanceof LatLon)) return new LatLon(lat, lng);
      
          this.lat = Number(lat);
          this.lng = Number(lng);
      }
      
      LatLon.prototype.intermediatePointTo = function(point, fraction) {
          if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');
      
          var φ1 = this.lat.toRadians(), λ1 = this.lng.toRadians();
          var φ2 = point.lat.toRadians(), λ2 = point.lng.toRadians();
          var sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), sinλ1 = Math.sin(λ1), cosλ1 = Math.cos(λ1);
          var sinφ2 = Math.sin(φ2), cosφ2 = Math.cos(φ2), sinλ2 = Math.sin(λ2), cosλ2 = Math.cos(λ2);
      
          // distance between points
          var Δφ = φ2 - φ1;
          var Δλ = λ2 - λ1;
          var a = Math.sin(Δφ/2) * Math.sin(Δφ/2)
              + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
          var δ = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      
          var A = Math.sin((1-fraction)*δ) / Math.sin(δ);
          var B = Math.sin(fraction*δ) / Math.sin(δ);
      
          var x = A * cosφ1 * cosλ1 + B * cosφ2 * cosλ2;
          var y = A * cosφ1 * sinλ1 + B * cosφ2 * sinλ2;
          var z = A * sinφ1 + B * sinφ2;
      
          var φ3 = Math.atan2(z, Math.sqrt(x*x + y*y));
          var λ3 = Math.atan2(y, x);
      
          return new LatLon(φ3.toDegrees(), (λ3.toDegrees()+540)%360-180); // normalise lng to −180..+180°
      };
      
      
      if (Number.prototype.toRadians === undefined) {
          Number.prototype.toRadians = function() { return this * Math.PI / 180; };
      }
      
      if (Number.prototype.toDegrees === undefined) {
          Number.prototype.toDegrees = function() { return this * 180 / Math.PI; };
      }
      
      for (i=0;i<10;i++){
          A.intermediatePointTo(B, 0.578);
      }
---

